// import {createSelector} from "reselect";
import {RootState} from "../reducers";
// import {IUser} from "../../types/actions/types";

export const getUsersListsSelector = (state: RootState) => {
  // @ts-ignore
  return state.users.usersLists
}

export const getLoading = (state: RootState) => {
  // @ts-ignore
  return state.users.loading
}

// export const getUsersLists = createSelector(
//   getUsersListsSelector,
//   (usersLists: Array<IUser>) => usersLists.filter(user => true)
// )

