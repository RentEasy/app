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

    firebase.initializeApp(firebaseConfig)
  }

  static async signInFacebook() {
    return await Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: [
        'public_profile',
        'email',
        'user_birthday',
        'user_location',
      ],
    });
  }

  static async signIn() {
    return
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

}

export { FirebaseService };