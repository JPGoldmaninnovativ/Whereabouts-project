import { getGroupsByCategory } from '../../../constants/api/GroupController';

export const FETCH_GROUPS = 'FETCH_GROUPS';

const publicGroup = 'public';

export const fetchGroups = () => ({
  type: FETCH_GROUPS,
  payload: getGroupsByCategory(publicGroup),
});