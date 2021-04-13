import React, {useEffect, useState} from 'react';
import MainLoyalty from '../../components/layout/mainLoyalty/MainLoyalty';
import {connect} from 'react-redux';
import styles from './HomeScreen.module.scss';
import {getUsers, setSearchValue} from "../../store/users/action";
import {RootState} from "../../store/reducers";
import {getLoading, getSearchValue, getUsersListsSelector} from '../../store/users/selectors';
import {IUser} from "../../types/actions/types";
import {AppDispatch} from "../../store";
import Card from '../../components/card';
import Panel from '../../components/layout/panel';
import SearchSVG from '../../components/iconsSVG/SearchSVG';

type MapStateToPropsType = {
  usersLists: Array<IUser>
  userSearch: string
  isLoading: boolean
}

type MapDispatchToPropsType = {
  getUsers: () => void,
  setSearchValue: (value: string) => void
}

type HomeScreenProps = {
  getUsers: () => void,
  usersLists: Array<IUser>,
  userSearch: string,
  setSearchValue: (value: string) => void,
  isLoading: boolean
}

const HomeScreen = React.memo(({getUsers, usersLists, userSearch, setSearchValue, isLoading}: HomeScreenProps) => {
  const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if(!userSearch) {
      getUsers()
    }
  },[getUsers])

  return (
    <div className={styles.root}>
        <MainLoyalty title={'Users GitHub'} isLoading={isLoading}>

          <div className={styles.mb3}>
            <Panel>
              <div className={styles.fieldGroup}>
                <input type="text" value={userSearch} onChange={handleChangeSearch}/>

                <span className={styles.icon}><SearchSVG /></span>
              </div>
            </Panel>
          </div>

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
                : <div className={styles.col12}><p className={`${styles.text} ${styles.my4}`}>User not Found</p></div>
            }
          </div>
      </MainLoyalty>
    </div>
  )
})

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  usersLists: getUsersListsSelector(state),
  userSearch: getSearchValue(state),
  isLoading: getLoading(state)
})

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => ({
  // @ts-ignore
  getUsers: () => dispatch(getUsers()),
  // @ts-ignore
  setSearchValue: (value) => dispatch(setSearchValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


