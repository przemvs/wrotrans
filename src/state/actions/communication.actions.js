import {
  FETCH_COMMUNICATION_FAILURE,
  FETCH_COMMUNICATION_START,
  FETCH_COMMUNICATION_SUCCESS
} from '../../constats/types'
import communicationService from '../services/communication'

export const getCommunication = () => async dispatch => {
  dispatch({type: FETCH_COMMUNICATION_START})
  try {
    const res = await communicationService.fetchCommunication()
    dispatch({type: FETCH_COMMUNICATION_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type: FETCH_COMMUNICATION_FAILURE})
    console.log(error)
  }
}
