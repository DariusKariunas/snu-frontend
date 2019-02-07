import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyCoqLg5XpQdG4zmqxVOGMcYYsDC8p3JXL4',
  authDomain: 'snub-ef67b.firebaseapp.com',
  databaseURL: 'https://snub-ef67b.firebaseio.com',
  projectId: 'snub-ef67b',
  storageBucket: 'snub-ef67b.appspot.com',
  messagingSenderId: '637360685272',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
//  messaging = firebase.messaging();

// Add the public key generated from the console here.
/*
messaging.usePublicVapidKey(
  'BDiBOiv4uO_C0Lo_2isFZOpMrbw2CUmb7vBgy81IjeTFd9vNO8-b31Jin7l2XkuAlBu750MzpcjUAY9v7yHRFpc',
);
*/

/*
messaging
  .requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  })
  .catch(err => {
    console.log('Unable to get permission to notify.', err);
  });
  */

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
/*
messaging
  .getToken()
  .then(currentToken => {
    if (currentToken) {
      console.log(currentToken);
    } else {
      // Show permission request.
      console.log(
        'No Instance ID token available. Request permission to generate one.',
      );
      // Show permission UI.
    }
  })
  .catch(err => {
    console.log('An error occurred while retrieving token. ', err);
  });
  */

export { auth, firebase, database };
