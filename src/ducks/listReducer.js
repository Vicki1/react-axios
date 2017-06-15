import apiURL from '../api';

const initialState = {
  loading: false,
  customerList: []
}

// Action Types
const GET_LIST = 'GET_LIST';


// Reducer
export default function listReducer( state = initialState, action ) {
  switch( action.type ) {
    // Pending
    case GET_LIST + '_PENDING':
      return{
        loading: true,
        customerList: []
      }
      case GET_LIST + '_FULFILLED':
      console.log(action.payload);
      return{
        loading: false,
        customerList: action.payload
      }
 
       default: return state;
  }
}

// Action Creators
export function getList(promise){
return{
  type: GET_LIST,
  payload: promise
}
}
