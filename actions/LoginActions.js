import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from "./types";
import i18n from '../i18n';
import {FirebaseService} from "../services";
import NavigationService from '../services/NavigationService';
import {Alert} from 'react-native';


export const login = () => {
  return (dispatch) => {
    dispatch({type: LOGIN});

    try {
      FirebaseService.signInFacebook()
        .then(function ({
                          type,
                          token,
                          expires,
                          permissions,
                          declinedPermissions,
                        }) {
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            fetch(`https://graph.facebook.com/me?access_token=${token}`).then(function (response) {
              loginSuccess(dispatch, {
                token: token,
                name: response.json().name
              });
            });
          } else {
            // type === 'cancel'
            loginFail(dispatch, 'User cancelled auth handshake.');
          }
        })
    } catch ({message}) {
      console.error(message);
      loginFail(dispatch, message);
    }
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
