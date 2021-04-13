import * as api from '../../api/services/users.api';
import {ActionsUserSearchType, ActionsUsersType } from '../../types/actions/types';
import {USERS} from "./type";
import {RootState} from "../reducers";
import { ThunkAction } from 'redux-thunk';

export const getUsers = (): ThunkAction<Promise<void>, RootState, unknown, ActionsUsersType> => async (dispatch, getState) => {
  await dispatch({type: USERS.GET.REQUEST})
  await api.getUsers()
    .then((res) => {
      console.log('RES: ', res)
      return dispatch({
        type: USERS.GET.SUCCESS,
        payload: res,
      })
    })
    .catch(err => {
      console.error('err: ', err)
      return dispatch({
        type: USERS.GET.FAILURE,
        payload: err,
      });
    });
}

export const setSearchValue = (value: string): ThunkAction<void, RootState, unknown, ActionsUserSearchType> => (dispatch, getState) => {
  dispatch({type: USERS.SEARCH_USER.REQUEST})
  dispatch({
    type: USERS.SEARCH_USER.SUCCESS,
    payload: value
  })
}