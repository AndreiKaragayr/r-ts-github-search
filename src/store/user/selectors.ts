// import {createSelector} from "reselect";
import {RootState} from "../reducers";
// import {IUser} from "../../types/actions/types";

export const getUserByNameSelector = (state: RootState) => {
  // @ts-ignore
  return state.user.userDetail
}

export const getRepoListByNameSelector = (state: RootState) => {
  // @ts-ignore
  return state.user.repoList
}


export const getLoading = (state: RootState) => {
  // @ts-ignore
  return state.user.loading
}

// export const getUsersLists = createSelector(
//   getUsersListsSelector,
//   (usersLists: Array<IUser>) => usersLists.filter(user => true)
// )

