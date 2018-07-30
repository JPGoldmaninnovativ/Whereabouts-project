import {
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_ERROR,
  CREATE_ACTIVITY_SUCCESS,
} from './actions';

const INITIAL_STATE = {
  error: {
    on: false,
    message: null,
  },
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_ACTIVITY_ERROR:
      return {
        error: {
          on: true,
          message: 'Error happen!',
        },
        isLoading: false,
      };
    default:
      return state;
  }
};
