import * as firebase from 'firebase';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FACEBOOK_APP_ID
} from 'react-native-dotenv';

class FirebaseService {

  static async init() {
    const firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
    };

    firebase.initializeApp(firebaseConfig);
  }

  static waitForLogin() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          return resolve(user);
        }

        return reject();
      });
    });
  }

  static signInFacebook() {
    return new Promise((resolve, reject) => {
      Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
        permissions: [
          'public_profile',
          'email',
          'user_birthday',
          'user_location',
        ],
      }).then(function ({
                          type,
                          token,
                          expires,
                          permissions,
                          declinedPermissions,
                        }) {
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          fetch(`https://graph.facebook.com/me?access_token=${token}`).then(function (response) {

            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            // Sign in with credential from the Facebook user.
            firebase.auth().signInWithCredential(credential).catch((error) => {
              // Handle Errors here.
            });

            resolve({
              token: token,
              name: response.json().name
            });
          });
        } else {
          reject('User cancelled auth handshake.');
        }
      });
    });
  }

  static signInGoogle() {

  }

  static signInEmail() {
    return new Promise((resolve, reject) => {
      let testEmail = "test@axxim.net";
      let testPassword = "1teFsd7st";
      firebase.auth().signInWithEmailAndPassword(testEmail, testPassword)
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  }

  static signIn(provider) {
    switch (provider) {
      case 'facebook':
        return this.signInFacebook();
      case 'google':
        return this.signInGoogle();
      case 'email':
        return this.signInEmail();
    }
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

}

export {FirebaseService};