// import {createSelector} from "reselect";
import {RootState} from "../reducers";
// import {IUser} from "../../types/actions/types";

export const getUsersListsSelector = (state: RootState) => {
  // @ts-ignore
  return state.users.usersLists
}

export const getSearchValue = (state: RootState) => {
  // @ts-ignore
  return state.users.userSearch
}

export const getLoading = (state: RootState) => {
  // @ts-ignore
  return state.users.loading
}