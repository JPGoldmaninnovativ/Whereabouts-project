import {
  FETCH_ACTIVITIES,
  FETCH_GROUPS,
  SET_GROUP,
} from './actions';

const INITIAL_STATE = {
  activities: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
  currentGroup: {
    title: 0,
  },
  groups: {
      data: [],
      isFetched: false,
      error: {
        on: false,
        message: null,
      },
    },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_ACTIVITIES}_PENDING`:
      return state;
    case `${FETCH_ACTIVITIES}_FULFILLED`:
      state.activities = {
       data: action.payload,
       isFetched: true,
       error: {
         on: false,
         message: null,
       }
      };
      return state;
    case `${FETCH_ACTIVITIES}_REJECTED`:
      state.activities = {
       data: [],
       isFetched: true,
       error: {
         on: false,
         message: 'Error when fetching my activities',
       }
      };
      return state;
    case `${FETCH_GROUPS}_PENDING`:
        return INITIAL_STATE;
    case `${FETCH_GROUPS}_FULFILLED`:
      state.groups = {
       data: action.payload,
       isFetched: true,
       error: {
         on: false,
         message: null,
       }
      };
      return state;
    case `${FETCH_GROUPS}_REJECTED`:
      state.groups = {
       data: [],
       isFetched: true,
       error: {
         on: false,
         message: null,
       }
      };
      return state;
    case `${SET_GROUP}`:
      state.currentGroup = action.payload;
      return state;
    default:
      return state;
  }
};
