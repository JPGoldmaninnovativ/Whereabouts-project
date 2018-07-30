import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
  ActivitiesReducer,
  CreateGroupReducer,
  CreateActivityReducer,
  ProfileReducer,
} from '../screens';

export default combineReducers({
  home: HomeReducer,
  activities: ActivitiesReducer,
  createGroup: CreateGroupReducer,
  createActivity: CreateActivityReducer,
  profile: ProfileReducer,
  form,
});
