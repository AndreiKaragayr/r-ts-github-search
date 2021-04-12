import * as api from '../../api/services/users.api';
import {ActionsUsersType } from '../../types/actions/types';
import {USERS} from "./type";
import {RootState} from "../reducers";
import { ThunkAction } from 'redux-thunk';

// export const addAuthor = (first_name='', last_name='') => async (dispatch) => {
//   await dispatch({type: USERS.ADD.REQUEST})
//   await api.addUser(first_name, last_name)
//     .then((res) => {
//       console.log('RES: ', res)
//       dispatch({
//         type: USERS.ADD.SUCCESS,
//         payload: {first_name, last_name},
//       });
//     })
//     .then(() => {
//       return dispatch(getUsers()) // refresh ID in redux (because in firebase ID === key)
//     })
//     .catch(err => {
//       console.error('err: ', err)
//       return dispatch({
//         type: AUTHORS.ADD.FAILURE,
//         payload: err,
//       });
//     });
// }

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

// export const updateAuthor = (id='', first_name='', last_name='') => async (dispatch) => {
//   await dispatch({type: AUTHORS.UPDATE.REQUEST})
//   await api.updateAuthor(id, first_name, last_name)
//     .then((res) => {
//       console.log('RES: ', res)
//       return dispatch({
//         type: AUTHORS.UPDATE.SUCCESS,
//         payload: {id, first_name, last_name}
//       });
//     })
//     .catch(err => {
//       console.error('err: ', err)
//       return dispatch({
//         type: AUTHORS.UPDATE.FAILURE,
//         payload: err,
//       });
//     });
// }
//
// export const deleteAuthor = (id='') => async (dispatch) => {
//   await dispatch({type: AUTHORS.DELETE.REQUEST})
//
//   const isDelete = window.confirm("Вы Действительно хотите удалить Автора ?")
//
//   if (isDelete) {
//     await api.deleteAuthor(id)
//       .then((res) => {
//         console.log('RES: ', res)
//         return dispatch({
//           type: AUTHORS.DELETE.SUCCESS,
//           payload: id
//         })
//       })
//       .catch(err => {
//         console.error('err: ', err)
//         return dispatch({
//           type: AUTHORS.DELETE.FAILURE,
//           payload: err,
//         });
//       })
//   }
// }