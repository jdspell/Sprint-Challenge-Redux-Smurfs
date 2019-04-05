import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";

export const CREATING_SMURF = "CREATING_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:8000/smurfs')
    .then(response => 
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
    )
    .catch(error => 
      dispatch({ type: FETCH_SMURF_FAILED, payload: error})
    )
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING_SMURF })
  axios
    .post('http://localhost:8000/smurfs', smurf)
    .then(response => 
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data })
    )
    .catch(error => 
      dispatch({ type: ADD_SMURF_FAILED, payload: error })
    )
};