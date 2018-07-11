import { postActivity } from '../../../constants/api/ActivityController';
import { fetchMyMeetups } from '../home/actions';

export const CREATE_MEETUP = 'CREATE_MEETUP';
export const CREATE_MEETUP_SUCCESS = 'CREATE_MEETUP_SUCCESS';
export const CREATE_MEETUP_ERROR = 'CREATE_MEETUP_ERROR';

export const createMeetup = args => async dispatch => {
  dispatch({ type: CREATE_MEETUP });
  try {
      postActivity(args, success => {
      console.log(success);
      dispatch({ type: CREATE_MEETUP_SUCCESS });
      //await dispatch(fetchMyMeetups());
    }, error => {
      dispatch({ type: CREATE_MEETUP_ERROR });
    });
  } catch (e) {
    return dispatch({ type: CREATE_MEETUP_ERROR });
  }
  //return await dispatch(fetchMyMeetups());
};
