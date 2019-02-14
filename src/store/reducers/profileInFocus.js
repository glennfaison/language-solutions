import { ActionTypes } from "../../constants";

const DefaultState = {
  waiting: false,
  data: null
};

const profileInFocus = (state = DefaultState, action) => {
  let type = action.type || undefined;
  switch (type) {
    case ActionTypes.LoginAttempt:
      return { waiting: true, isEditable: false, data: { ...state.data } };

    case ActionTypes.LoginSuccess:
      let newUser = action.payload.data;
      newUser.link = action.payload.links.self;
      return { waiting: false, isEditable: false, data: { ...newUser } };



    case ActionTypes.SignupAttempt:
      return { waiting: true, isEditable: false, data: { ...state.data } };

    case ActionTypes.SignupSuccess:
      return { waiting: false, isEditable: false, data: { ...state.data } };

    case ActionTypes.SignupFailure:
      return { waiting: false, isEditable: false, data: null };



    case ActionTypes.LogoutAttempt:
      return { waiting: true, isEditable: false, data: null };

    case ActionTypes.LogoutSuccess:
    case ActionTypes.LogoutFailure:
      return { waiting: false, isEditable: false, data: null };



    default:
      return state;
  }
};

export default profileInFocus;