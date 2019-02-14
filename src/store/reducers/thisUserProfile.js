import { ActionTypes } from "../../constants";

// const profile = { userInfo, quoteList };
const DefaultState = {
  waiting: false,
  data: null
};

const thisUserProfile = (state = DefaultState, action) => {
  let type = action.type || undefined;
  let newUser = null;
  let quoteList = [];
  switch (type) {
    case ActionTypes.LoginAttempt:
      return { waiting: true, data: { ...state.data } };

    case ActionTypes.LoginSuccess:
      newUser = action.payload.data;
      newUser.link = action.payload.links.self;
      return {
        waiting: false,
        data: {
          userInfo: { ...newUser },
          quoteList: state.data.quoteList ? [...state.data.quoteList] : []
        }
      };

    case ActionTypes.LoginFailure:
      return { waiting: false, data: null };



    case ActionTypes.LoadQuotesByAuthorAttempt:
      return { waiting: true, data: { ...state.data } };

    case ActionTypes.LoadQuotesByAuthorSuccess:
      quoteList = action.payload.data;
      return {
        waiting: false,
        data: {
          userInfo: { ...state.data.userInfo },
          quoteList: [...quoteList]
        }
      };
    case ActionTypes.LoadQuotesByAuthorFailure:
      return {
        waiting: false,
        data: {
          userInfo: { ...state.data.userInfo },
          quoteList: []
        }
      };



    case ActionTypes.LogoutAttempt:
      return { waiting: true, data: null };

    case ActionTypes.LogoutSuccess:
    case ActionTypes.LogoutFailure:
      return { waiting: false, data: null };



    default:
      return state;
  }
};

export default thisUserProfile;
