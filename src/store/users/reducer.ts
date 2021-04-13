import {ActionsUserSearchType, ActionsUsersType, IUser} from "../../types/actions/types";
import {USERS} from "./type";

const ArrayUserList = [{
    "login": '',
    "id": 0,
    "node_id": '',
    "avatar_url": '',
    "gravatar_id": '',
    "url": '',
    "html_url": '',
    "followers_url": '',
    "following_url": '',
    "gists_url": '',
    "starred_url": '',
    "subscriptions_url": '',
    "organizations_url": '',
    "repos_url": '',
    "events_url": '',
    "received_events_url": '',
    "type": '',
    "site_admin": false
  }]

const defaultState = {
  usersLists: ArrayUserList,
  originalUsersLists: ArrayUserList,
  userSearch: '',
  loading: true,
  error: ''
};

type DefultStateType = {
  usersLists: Array<IUser>,
  originalUsersLists: Array<IUser>,
  userSearch: string,
  loading: boolean,
  error: string
}

export const UsersReducer = ( state = defaultState, action: ActionsUsersType | ActionsUserSearchType ): DefultStateType => {
  const { type } = action;
  switch( type ) {
    case USERS.GET.REQUEST :
      return {
        ...state,
        loading: true
      }
    case USERS.GET.SUCCESS :
      return {
        ...state,
        loading: false,
        usersLists: action.payload,
        originalUsersLists: action.payload,
        error: ''
      }
    case USERS.GET.FAILURE :
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case USERS.SEARCH_USER.REQUEST :
      return {
        ...state,
        loading: true
      }
    case USERS.SEARCH_USER.SUCCESS :
      return {
        ...state,
        loading: false,
        userSearch: action.payload,
        usersLists: state.originalUsersLists.filter(u => u.login.toLowerCase().includes(action.payload.toLowerCase())),
        error: ''
      }
    default :
      return state
  }
}