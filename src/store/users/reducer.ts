import {ActionsUsersType, IUser} from "../../types/actions/types";
import {USERS} from "./type";

const defaultState = {
  usersLists: [{
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
  }],
  loading: true,
  error: ''
};

type DefultStateType = {
  usersLists: Array<IUser>,
  loading: boolean,
  error: string
}

export const UsersReducer = ( state = defaultState, action: ActionsUsersType ): DefultStateType => {
  const { type } = action;
  switch( type ) {
    // case USERS.ADD.REQUEST :
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // case USERS.ADD.SUCCESS :
    //   return {
    //     ...state,
    //     loading: false,
    //     authorsLists: [...state.usersLists, {id: new Date(), ...action.payload}],
    //     error: ''
    //   }
    // case USERS.ADD.FAILURE :
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload
    //   }
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
        error: ''
      }
    case USERS.GET.FAILURE :
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    // case USERS.UPDATE.REQUEST :
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // case USERS.UPDATE.SUCCESS :
    //   return {
    //     ...state,
    //     loading: false,
    //     authorsLists: state.authorsLists.map(a => {
    //       if(a.id === action.payload.id){
    //         return {
    //           ...a,
    //           first_name: action.payload.first_name,
    //           last_name: action.payload.last_name
    //         }
    //       }
    //       return a
    //     }),
    //     error: ''
    //   }
    // case USERS.UPDATE.FAILURE :
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload
    //   }
    // case USERS.DELETE.REQUEST :
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // case USERS.DELETE.SUCCESS :
    //   return {
    //     ...state,
    //     loading: false,
    //     authorsLists: state.authorsLists.filter(a => a.id !== action.payload),
    //     error: ''
    //   }
    // case USERS.DELETE.FAILURE :
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload
    //   }
    default :
      return state
  }
}