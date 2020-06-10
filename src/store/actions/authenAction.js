import authenService from '@/services/authenService'
import localStorageService from '@/utils/localStorageService'
import actionTypes from '@/constants/actionTypes'

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_IN_PROGRESS
    })
    return authenService.login(username, password)
      .then(
        (response) => {
          localStorageService.setToken(response.data.token)
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: response.data
          })
        },
        (error) => {
          setTimeout(() => {
            dispatch({
              type: actionTypes.LOGIN_FAILED,
              payload: error
            })
          }, 2000)

        }
      )
  }
}
