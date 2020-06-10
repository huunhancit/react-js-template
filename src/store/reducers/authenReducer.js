import actionTypes from '@/constants/actionTypes'
import { AUTHEN_STATUS } from '@/constants'

const initState = {
  authenStatus: AUTHEN_STATUS.NOT_AUTHENTICATED,
  username: ''
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_IN_PROGRESS:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.AUTHENTICATING
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.AUTHENTICATED
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.NOT_AUTHENTICATED
      }
    default:
      return state
  }
}

export default reducer
