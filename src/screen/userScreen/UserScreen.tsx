import React, {useEffect} from 'react';
import MainLoyalty from '../../components/layout/mainLoyalty/MainLoyalty';
import {connect} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'
import styles from './UserScreen.module.scss';
import {RootState} from "../../store/reducers";
import {IRepoDetail, IUserDetail} from "../../types/actions/types";
import {AppDispatch} from "../../store";
import Button from "../../components/UI/button";
import {getLoading, getRepoListByNameSelector, getSearchValueRepo, getUserByNameSelector } from '../../store/user/selectors';
import {getRepoListByName, getUserByName, setSearchRepo} from "../../store/user/action";
import not_avatar from '../../assets/img/not_avatar.jpg';
import Panel from "../../components/layout/panel";
import SearchSVG from "../../components/iconsSVG/SearchSVG";

type MapStateToPropsType = {
  userDetail: IUserDetail
  repoSearch: string
  repoList: Array<IRepoDetail>
  isLoading: boolean
}

type MapDispatchToPropsType = {
  getUserByName: (username: string) => void,
  getRepoListByName: (username: string) => void,
  setSearchRepo: (value: string) => void,
}

type UserScreenProps = {
  getUserByName: (username: string) => void,
  getRepoListByName: (username: string) => void,
  setSearchRepo: (username: string) => void,
  repoSearch: string,
  userDetail: IUserDetail,
  repoList: Array<IRepoDetail>,
  isLoading: boolean
}

const UserScreen = ({getUserByName, userDetail, isLoading, getRepoListByName, repoList, repoSearch, setSearchRepo}: UserScreenProps) => {
  const history = useHistory()
  const params = useParams<{username: string}>()

  const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setSearchRepo(e.target.value)
  }

  useEffect(() => {
    getUserByName(params.username)
    getRepoListByName(params.username)
  }, [getUserByName, getRepoListByName, params.username])

  return (
    <div className={styles.root}>
      <MainLoyalty title={'User Info'} isLoading={isLoading}>

        <div className={styles.head}>
          <Button view={'outline'} onClick={() => history.goBack()}>Back</Button>

        </div>

        <div className={`${styles.row} ${styles.mb3}`}>
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

        <div className={styles.mb3}>
          <Panel>
            <div className={styles.fieldGroup}>
              <input type="text" value={repoSearch} onChange={handleChangeSearch}/>
              <span className={styles.icon}><SearchSVG /></span>
            </div>
          </Panel>
        </div>

        <div>
          {
            repoList.length ?
              repoList.map(r => {
                return (
                  <div key={r.id} className={styles.mb3}>
                    <Panel>
                      <div className={styles.repo}>
                        <a href={r.git_url.replace('git:', 'https:')} className={styles.link} target="_blank" rel="noreferrer" />
                        <p className={styles.text}>{r.name}</p>

                        <div>
                          <div className={styles.list}><b>{r.forks}</b>Forks</div>
                          <div className={styles.list}><b>{r.stargazers_count}</b> Stars</div>
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
  repoSearch: getSearchValueRepo(state),
  isLoading: getLoading(state)
})

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => ({
  // @ts-ignore
  getUserByName: (username) => dispatch(getUserByName(username)),
  // @ts-ignore
  getRepoListByName: (username) => dispatch(getRepoListByName(username)),
  // @ts-ignore
  setSearchRepo: (value) => dispatch(setSearchRepo(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)


