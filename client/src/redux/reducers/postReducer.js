import { EditData, TYPES } from '../actions/cardAction';

const initialState = {
  projects: [],
  result: 0,
  loading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
  case TYPES.CREATE_PROJECT:
    return {
      ...state,
      projects: [...state.projects, action.payload],
    };
  case TYPES.GET_PROJECTS:
    return {
      ...state,
      projects: action.payload,
      result: action.payload.length,
    };
  case TYPES.UPDATE_PROJECT:
    return {
      ...state,
      post: EditData(state.projects, action.payload._id, action.payload)
    };
    //   case TYPES.DELETE_PROJECT:
    //     return {
    //       ...state,
    //       projects: state.projects.filter(
    //         (project) => project._id !== action.payload
    //       ),
    //     };
  default:
    return state;
  }
};

export default postReducer;
