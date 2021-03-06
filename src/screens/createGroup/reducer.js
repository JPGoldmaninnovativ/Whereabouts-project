import {
  CREATE_GROUP,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
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
    case CREATE_GROUP:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_GROUP_ERROR:
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
