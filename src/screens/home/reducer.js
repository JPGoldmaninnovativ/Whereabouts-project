import {
  FETCH_GROUPS,
} from './actions';

const INITIAL_STATE = {
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
    case `${FETCH_GROUPS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_GROUPS}_FULFILLED`:
      return {
        groups: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      };
    case `${FETCH_GROUPS}_REJECTED`:
      return {
        groups: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching my groups',
          },
        },
      };
    default:
      return state;
  }
};
