/*
  Be sure to import in all of the action types from `../actions`
*/

import { 
  FETCHING_SMURFS, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILED, 
  CREATING_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    
    case FETCH_SMURF_SUCCESS:
     return {
       ...state,
       smurfs: action.payload,
       fetchingSmurfs: false,
       error: ''
     };

     case FETCH_SMURF_FAILED:
      return {
        ...state,
        error: action.payload
      };

      // case CREATING_SMURF:
      //   const newSmurf = {
      //     ...action.payload,
      //     id: Date.now()
      //   };
      //   return {
      //     ...state,
      //     smurfs: [...state.smurfs, newSmurf],
      //     addingSmurf: true
      //   };

      case CREATING_SMURF:
        return {
          ...state,
          addingSmurfs: true,
          error: ''
        };

      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          addingSmurf: false,
          error: ''
        };
  
      case ADD_SMURF_FAILED:
        return {
          ...state,
          error: action.payload
        };

    default:
      return state;
  }
}

export default reducer;