import {ActionsRepoSearchType, ActionsUserByNameType, IRepoDetail, IUserDetail} from "../../types/actions/types";
import {USER} from "./type";

const ArrayRepoList = [{
  "id": 0,
  "node_id": "",
  "name": "",
  "full_name": "",
  "private": false,
  "owner": {
    "login": "",
    "id": 0,
    "node_id": "",
    "avatar_url": "",
    "gravatar_id": "",
    "url": "",
    "html_url": "",
    "followers_url": "",
    "following_url": "",
    "gists_url": "",
    "starred_url": "",
    "subscriptions_url": "",
    "organizations_url": "",
    "repos_url": "",
    "events_url": "",
    "received_events_url": "",
    "type": "",
    "site_admin": false
  },
  "html_url": "",
  "description": null,
  "fork": false,
  "url": "",
  "forks_url": "",
  "keys_url": "",
  "collaborators_url": "",
  "teams_url": "",
  "hooks_url": "",
  "issue_events_url": "",
  "events_url": "",
  "assignees_url": "",
  "branches_url": "",
  "tags_url": "",
  "blobs_url": "",
  "git_tags_url": "",
  "git_refs_url": "",
  "trees_url": "",
  "statuses_url": "",
  "languages_url": "",
  "stargazers_url": "",
  "contributors_url": "",
  "subscribers_url": "",
  "subscription_url": "",
  "commits_url": "",
  "git_commits_url": "",
  "comments_url": "",
  "issue_comment_url": "",
  "contents_url": "",
  "compare_url": "",
  "merges_url": "",
  "archive_url": "",
  "downloads_url": "",
  "issues_url": "",
  "pulls_url": "",
  "milestones_url": "",
  "notifications_url": "",
  "labels_url": "",
  "releases_url": "",
  "deployments_url": "",
  "created_at": "",
  "updated_at": "",
  "pushed_at": "",
  "git_url": "",
  "ssh_url": "",
  "clone_url": "",
  "svn_url": "",
  "homepage": null,
  "size": 0,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "",
  "has_issues": false,
  "has_projects": false,
  "has_downloads": false,
  "has_wiki": false,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": ""
}]

const defaultState = {
  userDetail: {
    "login": "",
    "id": 0,
    "node_id": "",
    "avatar_url": "",
    "gravatar_id": "",
    "url": "",
    "html_url": "",
    "followers_url": "",
    "following_url": "",
    "gists_url": "",
    "starred_url": "",
    "subscriptions_url": "",
    "organizations_url": "",
    "repos_url": "",
    "events_url": "",
    "received_events_url": "",
    "type": "",
    "site_admin": false,
    "name": "",
    "company": "",
    "blog": "",
    "location": "",
    "email": "",
    "hireable": false,
    "bio": "",
    "twitter_username": "",
    "public_repos": 2,
    "public_gists": 1,
    "followers": 20,
    "following": 0,
    "created_at": "",
    "updated_at": ""
  },
  repoList: ArrayRepoList,
  originRepoList: ArrayRepoList,
  repoSearch:'',
  loading: true,
  error: ''
};

type DefultStateType = {
  userDetail: IUserDetail,
  repoList: Array<IRepoDetail>,
  originRepoList: Array<IRepoDetail>,
  repoSearch: string,
  loading: boolean,
  error: string
}

export const UserDetailReducer = ( state = defaultState, action: ActionsUserByNameType | ActionsRepoSearchType ): DefultStateType => {
  const { type } = action;
  switch( type ) {
    case USER.GET_USER.REQUEST :
      return {
        ...state,
        loading: true
      }
    case USER.GET_USER.SUCCESS :
      return {
        ...state,
        loading: false,
        userDetail: action.payload,
        error: ''
      }
    case USER.GET_USER.FAILURE :
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case USER.GET_REPO_LIST.REQUEST :
      return {
        ...state,
        loading: true
      }
    case USER.GET_REPO_LIST.SUCCESS :
      return {
        ...state,
        loading: false,
        repoList: action.payload,
        originRepoList: action.payload,
        error: ''
      }
    case USER.GET_REPO_LIST.FAILURE :
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case USER.SEARCH_REPO.REQUEST :
      return {
        ...state,
        loading: true
      }
    case USER.SEARCH_REPO.SUCCESS :
      return {
        ...state,
        loading: false,
        repoSearch: action.payload,
        repoList: state.originRepoList.filter(u => u.name.toLowerCase().includes(action.payload.toLowerCase())),
        error: ''
      }
    default :
      return state
  }
}