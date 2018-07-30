import { postActivity } from '../../../constants/api/ActivityController';
import { fetchActivities } from '../activities/actions';

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const CREATE_ACTIVITY_SUCCESS = 'CREATE_ACTIVITY_SUCCESS';
export const CREATE_ACTIVITY_ERROR = 'CREATE_ACTIVITY_ERROR';

export const createActivity = args => async dispatch => {
  dispatch({ type: CREATE_ACTIVITY });
  try {
      var res = await postActivity(args);
      dispatch({ type: CREATE_ACTIVITY_SUCCESS });
  } catch (e) {
    return dispatch({ type: CREATE_ACTIVITY_ERROR });
  }
  return await dispatch(fetchActivities());
};
