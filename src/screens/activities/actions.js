import { getActivitiesByGroup } from '../../../constants/api/ActivityController';
import { getGroupsByCategory } from '../../../constants/api/GroupController';

export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';

export const fetchActivities = (group) => ({
  type: FETCH_ACTIVITIES,
  payload: getActivitiesByGroup(group),
});

export const FETCH_GROUPS = 'FETCH_GROUPS';

export const fetchGroups = () => ({
  type: FETCH_GROUPS,
  payload: getGroupsByCategory('public'),
});

export const SET_GROUP = 'SET_GROUP';

export const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});