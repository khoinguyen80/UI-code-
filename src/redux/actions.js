import { toast } from 'react-toastify'
import { INCREMENT, DECREASE } from './actionTypes'

const incrementAction = () =>
  function (dispatch) {
    dispatch({
      type: INCREMENT,
    })
    toast.success('MY SUCCESS')
  }
const decreaseAction = () =>
  function (dispatch) {
    dispatch({
      type: DECREASE,
    })
    toast.warn('DECREASE')
  }

export default { incrementAction, decreaseAction }
