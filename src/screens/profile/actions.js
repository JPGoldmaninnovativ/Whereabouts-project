import { getMyProfiles, postProfile } from '../../../constants/api/ProfileController';

export const FETCH_PROFILES = 'FETCH_PROFILES';

export const fetchProfiles = () => ({
  type: FETCH_PROFILES,
  payload: getMyProfiles(),
});

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_ERROR = 'CREATE_PROFILE_ERROR';

export const createProfile = args => async dispatch => {
  dispatch({ type: CREATE_PROFILE });
  try {
      console.log(args);
      var res = await postProfile(args);
      console.log(res);
      dispatch({ type: CREATE_PROFILE_SUCCESS });
  } catch (e) {
    return dispatch({ type: CREATE_PROFILE_ERROR });
  }
  return await dispatch(fetchProfiles());
};

export const SET_ALIAS = 'SET_ALIAS';

export const setAlias = (alias) => ({
  type: SET_ALIAS,
  payload: alias,
});

export const SET_SEX = 'SET_SEX';

export const setSex = (sex) => ({
  type: SET_SEX,
  payload: sex,
});