import React, {useEffect} from 'react';
import MainLoyalty from '../../components/layout/mainLoyalty/MainLoyalty';
import {connect} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'
import styles from './UserScreen.module.scss';
import {RootState} from "../../store/reducers";
import {IRepoDetail, IUserDetail} from "../../types/actions/types";
import {AppDispatch} from "../../store";
import Button from "../../components/UI/button";
import {getLoading, getRepoListByNameSelector, getUserByNameSelector } from '../../store/user/selectors';
import {getRepoListByName, getUserByName} from "../../store/user/action";
import not_avatar from '../../assets/img/not_avatar.jpg';
import Panel from "../../components/layout/panel";

type MapStateToPropsType = {
  userDetail: IUserDetail
  repoList: Array<IRepoDetail>
  isLoading: boolean
}

type MapDispatchToPropsType = {
  getUserByName: (username: string) => void,
  getRepoListByName: (username: string) => void,
}

type UserScreenProps = {
  getUserByName: (username: string) => void,
  getRepoListByName: (username: string) => void,
  userDetail: IUserDetail,
  repoList: Array<IRepoDetail>,
  isLoading: boolean
}

const UserScreen = ({getUserByName, userDetail, isLoading, getRepoListByName, repoList}: UserScreenProps) => {
  const history = useHistory()
  const params = useParams<{username: string}>()

  useEffect(() => {
    getUserByName(params.username)
    getRepoListByName(params.username)
  }, [getUserByName, getRepoListByName, params.username])

  console.log(userDetail)
  console.log('repoList: ', repoList)

  return (
    <div className={styles.root}>
      <MainLoyalty title={'User Info'} isLoading={isLoading}>

        <div className={styles.head}>
          <Button view={'outline'} onClick={() => history.goBack()}>Back</Button>

        </div>

        <div className={styles.row}>
          <div className={styles.col2}>
            {
              userDetail.avatar_url ?
                <img src={userDetail.avatar_url} alt="avatar" className={styles.image}/>
                : <img src={not_avatar} alt="not-avatar" className={styles.image}/>
            }
          </div>
          <div className={styles.col10}>
            <article className={styles.article}>
              {userDetail.login && <div className={styles.list}><span className={styles.label}>Login: </span><h2 className={styles.text}>{userDetail.login}</h2></div>}
              {userDetail.name && <div className={styles.list}><span className={styles.label}>Name: </span><p className={styles.text}>{userDetail.name}</p></div>}
              {userDetail.public_repos && <div className={styles.list}><span className={styles.label}>Public repositories : </span><p className={styles.text}>{userDetail.public_repos}</p></div>}
              {userDetail.followers && <div className={styles.list}><span className={styles.label}>Followers : </span><p className={styles.text}>{userDetail.followers}</p></div>}
              {userDetail.following && <div className={styles.list}><span className={styles.label}>Following : </span><p className={styles.text}>{userDetail.following}</p></div>}
              {userDetail.email && <div className={styles.list}><span className={styles.label}>Email : </span><p className={styles.text}>{userDetail.email}</p></div>}
              {userDetail.location && <div className={styles.list}><span className={styles.label}>Location : </span><p className={styles.text}>{userDetail.location}</p></div>}
              {userDetail.bio && <div className={styles.list}><span className={styles.label}>Bio : </span><p className={styles.text}>{userDetail.bio}</p></div>}
              {userDetail.created_at && <div className={styles.list}><span className={styles.label}>Join date : </span><p className={styles.text}>
                {`${new Date (userDetail.created_at).getDate()}/${new Date (userDetail.created_at).getMonth()+1}/${new Date (userDetail.created_at).getFullYear()}`}
              </p></div>}
            </article>
          </div>
        </div>

        <div>
          {
            repoList.length ?
              repoList.map(r => {
                return (
                  <div key={r.id}>
                    <Panel>
                      <div>
                        <p className={styles.text}>{r.name}</p>

                        <div>
                          <div className={styles.list}>{r.forks} Forks</div>
                          <div className={styles.list}>{r.stargazers_count} Stars</div>
                        </div>
                      </div>
                    </Panel>
                  </div>
                )
              })
              : <p>Repositories not found</p>
          }
        </div>

      </MainLoyalty>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  userDetail: getUserByNameSelector(state),
  repoList: getRepoListByNameSelector(state),
  isLoading: getLoading(state)
})

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => ({
  // @ts-ignore
  getUserByName: (username) => dispatch(getUserByName(username)),
  // @ts-ignore
  getRepoListByName: (username) => dispatch(getRepoListByName(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)


