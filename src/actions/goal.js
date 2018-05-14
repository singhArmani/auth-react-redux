import * as goalTypes from '../types/goal';
import GoalApi from '../api/goal';

export const startFetchingGoals = () => ({
  type: goalTypes.START_FETCHING_GOALS,
});

export const stopFetchingGoals = () => ({
  type: goalTypes.STOP_FETCHING_GOALS,
});


export const getGoals = () => {
  return async dispatch => {
    dispatch(startFetchingGoals());
    try{
      const response = await GoalApi.getGoals();
      dispatch(updateGoals(response.data.goals));
      dispatch(stopFetchingGoals());
    }catch(err) {
      dispatch(stopFetchingGoals());
      dispatch({
        type: goalTypes.ERROR_FETCHING_GOALS,
        payload: {
          error: err.message || 'Error Occured while fetching goals'
        }
      });
    }
  };
};

export const updateGoals = (goals) => ({
  type: goalTypes.UPDATE_GOALS,
  payload: {
    goals
  }
});