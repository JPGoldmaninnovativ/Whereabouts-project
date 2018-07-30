import {
  FETCH_PROFILES,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  SET_ALIAS,
  SET_SEX,
} from './actions';

const INITIAL_STATE = {
  profile: {
    data: {
      alias: "",
      sex: "",
      type: "",
    },
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case `${FETCH_PROFILES}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_PROFILES}_FULFILLED`:
      if (action.payload.length > 0) {
        return {
            profile: {
              data: action.payload[0],
              isFetched: true,
              error: {
                on: false,
                message: null,
              },
            },
            isLoading: false,
          };
      } else {
        return {
            profile: {
              data: {
                alias: "",
                sex: "",
                type: "",
              },
              isFetched: true,
              error: {
                on: false,
                message: null,
              },
            },
            isLoading: false,
          };
      }
    case `${FETCH_PROFILES}_REJECTED`:
      return {
        profile: {
          data: {
            alias: "",
            sex: "",
            type: "",
          },
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching my groups',
          },
        },
        isLoading: false,
      };
    case CREATE_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ALIAS:
      state.profile.data.alias = action.payload.alias;
      return state;
    case SET_SEX:
      state.profile.data.sex = action.payload.sex;
      return state;
    default:
      return state;
  }
};
