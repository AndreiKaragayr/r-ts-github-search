import { USER } from "../../store/user/type";
import {USERS} from "../../store/users/type";

export interface IUser {
  "login": string,
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id"?: string,
  "url": string,
  "html_url": string,
  "followers_url": string,
  "following_url": string,
  "gists_url": string,
  "starred_url": string,
  "subscriptions_url": string,
  "organizations_url": string,
  "repos_url": string,
  "events_url": string,
  "received_events_url": string,
  "type": string,
  "site_admin": boolean
}

export interface IUserDetail {
  "login": string,
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id"?: string,
  "url": string,
  "html_url": string,
  "followers_url": string,
  "following_url": string,
  "gists_url": string,
  "starred_url": string,
  "subscriptions_url": string,
  "organizations_url": string,
  "repos_url": string,
  "events_url": string,
  "received_events_url": string,
  "type": string,
  "site_admin": boolean,
  "name": string,
  "company": string,
  "blog": string,
  "location": string,
  "email": string,
  "hireable": boolean,
  "bio": string,
  "twitter_username": string,
  "public_repos": number,
  "public_gists": number,
  "followers": number,
  "following": number,
  "created_at": string,
  "updated_at": string
}

export interface IRepoDetail {
  "id": number,
  "node_id": string,
  "name": string,
  "full_name": string,
  "private": boolean,
  "owner": {
    "login": string,
    "id": number,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean
  },
  "html_url": string,
  "description": null,
  "fork": boolean,
  "url": string,
  "forks_url": string,
  "keys_url": string,
  "collaborators_url": string,
  "teams_url": string,
  "hooks_url": string,
  "issue_events_url": string,
  "events_url": string,
  "assignees_url": string,
  "branches_url": string,
  "tags_url": string,
  "blobs_url": string,
  "git_tags_url": string,
  "git_refs_url": string,
  "trees_url": string,
  "statuses_url": string,
  "languages_url": string,
  "stargazers_url": string,
  "contributors_url": string,
  "subscribers_url": string,
  "subscription_url": string,
  "commits_url": string,
  "git_commits_url": string,
  "comments_url": string,
  "issue_comment_url": string,
  "contents_url": string,
  "compare_url": string,
  "merges_url": string,
  "archive_url": string,
  "downloads_url": string,
  "issues_url": string,
  "pulls_url": string,
  "milestones_url": string,
  "notifications_url": string,
  "labels_url": string,
  "releases_url": string,
  "deployments_url": string,
  "created_at": string,
  "updated_at": string,
  "pushed_at": string,
  "git_url": string,
  "ssh_url": string,
  "clone_url": string,
  "svn_url": string,
  "homepage": any,
  "size": number,
  "stargazers_count": number,
  "watchers_count": number,
  "language": string,
  "has_issues": boolean,
  "has_projects": boolean,
  "has_downloads": boolean,
  "has_wiki": boolean,
  "has_pages": boolean,
  "forks_count": number,
  "mirror_url": any,
  "archived": boolean,
  "disabled": boolean,
  "open_issues_count": number,
  "license": any,
  "forks": number,
  "open_issues": number,
  "watchers": number,
  "default_branch": string
}

interface IUsersRequest {
  type: typeof USERS.GET.REQUEST,
  payload?: any
}

interface IUsersSuccess {
  type: typeof USERS.GET.SUCCESS,
  payload: Array<IUser>,
}

interface IUsersFailure {
  type: typeof USERS.GET.FAILURE,
  payload: string,
}

interface IGetUserByNameRequest {
  type: typeof USER.GET.REQUEST,
  payload?: any
}

interface IGetUserByNameSuccess {
  type: typeof USER.GET.SUCCESS,
  payload: object,
}

interface IGetUserByNameFailure {
  type: typeof USER.GET.FAILURE,
  payload: string,
}

interface IGetRepoListByNameRequest {
  type: typeof USER.GET_REPO_LIST.REQUEST,
  payload?: any
}

interface IGetRepoListByNameSuccess {
  type: typeof USER.GET_REPO_LIST.SUCCESS,
  payload: object,
}

interface IGetRepoListByNameFailure {
  type: typeof USER.GET_REPO_LIST.FAILURE,
  payload: string,
}

export type ActionsUsersType = IUsersRequest | IUsersSuccess | IUsersFailure;
export type ActionsUserByNameType = IGetUserByNameRequest | IGetUserByNameSuccess | IGetUserByNameFailure;
export type ActionsRepoListByNameType = IGetRepoListByNameRequest | IGetRepoListByNameSuccess | IGetRepoListByNameFailure;


