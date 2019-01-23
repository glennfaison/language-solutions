import { ActionTypes } from "../../constants";
import { AuthResource, UsersResource } from '../../httpResources';
import { NotificationManager } from 'react-notifications';

export const logOut = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LogoutAttempt });
  try {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("access-token");
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
      NotificationManager.success("Logged In Successfully!");
      dispatch({ type: ActionTypes.LoginSuccess, payload: { newUser: res.body } });
      localStorage.setItem("username", res.body.data.username);
      localStorage.setItem("email", res.body.data.email);
      localStorage.setItem("access-token", res.body.data.token);
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