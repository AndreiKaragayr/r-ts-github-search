import * as api from '../../api/services/users.api';
import {ActionsRepoListByNameType, ActionsRepoSearchType, ActionsUserByNameType } from '../../types/actions/types';
import {USER} from "./type";
import {RootState} from "../reducers";
import { ThunkAction } from 'redux-thunk';

export const getUserByName = (username: string): ThunkAction<Promise<void>, RootState, unknown, ActionsUserByNameType> => async (dispatch, getState) => {
  await dispatch({type: USER.GET_USER.REQUEST})
  await api.getUserByName(username)
    .then((res) => {
      console.log('RES: ', res)
      return dispatch({
        type: USER.GET_USER.SUCCESS,
        payload: res,
      })
    })
    .catch(err => {
      console.error('err: ', err)
      return dispatch({
        type: USER.GET_USER.FAILURE,
        payload: err,
      });
    });
}

export const getRepoListByName = (username: string): ThunkAction<Promise<void>, RootState, unknown, ActionsRepoListByNameType> => async (dispatch, getState) => {
  await dispatch({type: USER.GET_REPO_LIST.REQUEST})
  await api.getRepoByName(username)
    .then((res) => {
      console.log('RES: ', res)
      return dispatch({
        type: USER.GET_REPO_LIST.SUCCESS,
        payload: res,
      })
    })
    .catch(err => {
      console.error('err: ', err)
      return dispatch({
        type: USER.GET_REPO_LIST.FAILURE,
        payload: err,
      });
    });
}

export const setSearchRepo = (value: string): ThunkAction<void, RootState, unknown, ActionsRepoSearchType> => async (dispatch, getState) => {
  dispatch({type: USER.SEARCH_REPO.REQUEST})
  dispatch({
    type: USER.SEARCH_REPO.SUCCESS,
    payload: value
  })
}