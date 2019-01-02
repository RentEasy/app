import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from "./types";
import i18n from '../i18n';
import {FirebaseService} from "../services";
import NavigationService from '../services/NavigationService';
import {Alert} from 'react-native';


export const login = (provider) => {
  return (dispatch) => {
    dispatch({type: LOGIN});

    FirebaseService.signIn(provider).then(
      (user) => loginSuccess(dispatch, user),
      (err) => loginFail(dispatch, err)
    );
  }
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({type: LOGIN});

    loginSuccess(dispatch, user);
  }
};

const loginSuccess = (dispatch, user) => {
  dispatch({type: LOGIN_SUCCESS, payload: user});

  NavigationService.navigate('Main');
};

const loginFail = (dispatch, error) => {
  dispatch({type: LOGIN_FAIL});

  if (error) {
    Alert.alert(
      i18n.t('app.attention'),
      error,
      [{text: i18n.t('app.ok')}],
      {cancelable: true}
    );
  }
};
