import { ActionTypes, Routes } from "../../constants";
import { AuthResource, UsersResource } from '../../httpResources';
import { NotificationManager } from 'react-notifications';
import { loadQuotesByAuthor } from "./quotes";
import { routerActions } from 'react-router-redux'

export const logOut = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LogoutAttempt });
  try {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("access-token");
    dispatch({ type: ActionTypes.LogoutSuccess });
    NotificationManager.success("Logged Out Successfully");
  } catch (error) {
    NotificationManager.error("Error While Logging Out!")
    dispatch({ type: ActionTypes.LogoutFailure });
  }
};

export const logInWithEmailAndPassword = (user) => (dispatch) => {
  dispatch({ type: ActionTypes.LoginAttempt });
  AuthResource.logIn(user)
    .then(res => {
      NotificationManager.success("Logged In Successfully!", "Login Status", 2000000000, () => { }, 'high');
      dispatch({ type: ActionTypes.LoginSuccess, payload: { ...res.body } });
      loadQuotesByAuthor(res.body.data.id)(dispatch);
      localStorage.setItem("username", res.body.data.username);
      localStorage.setItem("email", res.body.data.email);
      localStorage.setItem("access-token", res.body.data.token);
      dispatch(routerActions.push(Routes.profile));
    })
    .catch(err => {
      NotificationManager.error("Login Failure!");
      dispatch({ type: ActionTypes.LoginFailure, payload: {} });
    });
};

export const signUpWithEmailAndPassword = (user) => (dispatch) => {
  dispatch({ type: ActionTypes.SignupAttempt });
  UsersResource.create(user)
    .then(res => {
      dispatch({ type: ActionTypes.SignupSuccess, payload: { newUser: res.body } });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.SignupFailure, payload: {} });
    });
};
