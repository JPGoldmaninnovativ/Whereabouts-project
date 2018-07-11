import { getActivitiesByGroup } from '../../../constants/api/ActivityController';

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

const fakeGroup = 'af1beae3-4b97-445f-ab78-1dbcc14deda0';

export const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
  payload: getActivitiesByGroup(fakeGroup),
});
