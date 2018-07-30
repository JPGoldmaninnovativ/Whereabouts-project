import { postGroup } from '../../../constants/api/GroupController';
import { fetchGroups } from '../home/actions';

export const CREATE_GROUP = 'CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_ERROR = 'CREATE_GROUP_ERROR';

export const createGroup = args => async dispatch => {
  dispatch({ type: CREATE_GROUP });
  try {
      args.category = 'public';
      var res = await postGroup(args);
      dispatch({ type: CREATE_GROUP_SUCCESS });
  } catch (e) {
    return dispatch({ type: CREATE_GROUP_ERROR });
  }
  return await dispatch(fetchGroups());
};
