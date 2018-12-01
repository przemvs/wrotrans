import {
  FETCH_COMMUNICATION_FAILURE,
  FETCH_COMMUNICATION_START,
  FETCH_COMMUNICATION_SUCCESS
} from '../../constats/types'

const initialState = {
  objects: {
    isLoading: false,
    isEmpty: true,
    data: {}
  }
}

const communicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMUNICATION_START:
      return {
        ...state,
        objects: {
          isLoading: true
        }
      }

    case FETCH_COMMUNICATION_SUCCESS:
      return {
        ...state,
        objects: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_COMMUNICATION_FAILURE:
      return {
        ...state,
        objects: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    default:
      return state
  }
}

export default communicationReducer
