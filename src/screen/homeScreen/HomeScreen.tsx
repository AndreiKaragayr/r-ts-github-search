import React, {useEffect} from 'react';
import MainLoyalty from '../../components/layout/mainLoyalty/MainLoyalty';
import {connect} from 'react-redux';
import styles from './HomeScreen.module.scss';
import {getUsers} from "../../store/users/action";
import {RootState} from "../../store/reducers";
import {getLoading, getUsersListsSelector } from '../../store/users/selectors';
import {IUser} from "../../types/actions/types";
import {AppDispatch} from "../../store";
import Card from '../../components/card';

type MapStateToPropsType = {
  usersLists: Array<IUser>
  isLoading: boolean
}

type MapDispatchToPropsType = {
  getUsers: () => void,
}

type HomeScreenProps = {
  getUsers: () => void,
  usersLists: Array<IUser>,
  isLoading: boolean
}

const HomeScreen = ({getUsers, usersLists, isLoading}: HomeScreenProps) => {

  useEffect(() => {
    getUsers()
  },[getUsers])

  return (
    <div className={styles.root}>
        <MainLoyalty title={'Users GitHub'} isLoading={false}>
          <div className={styles.row}>
            {
              usersLists && usersLists.length ?
                usersLists.map(u => {
                  return (
                    <div className={`${styles.col12} ${styles.mb3}`} key={u.id}>
                      <Card avatar_url={u.avatar_url} login={u.login} />
                    </div>
                  )
                })
                : <div className={styles.col4}><p className={styles.text}>User not Found</p></div>
            }
          </div>
      </MainLoyalty>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  usersLists: getUsersListsSelector(state),
  isLoading: getLoading(state)
})

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => ({
  // @ts-ignore
  getUsers: () => dispatch(getUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


