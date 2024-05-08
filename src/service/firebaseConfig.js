// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCOGE3BzjZTBUyJ5Oa6vLauOiOHSNDPdNc',
  authDomain: 'caloriecounter-72e75.firebaseapp.com',
  databaseURL: 'https://caloriecounter-72e75-default-rtdb.firebaseio.com',
  projectId: 'caloriecounter-72e75',
  storageBucket: 'caloriecounter-72e75.appspot.com',
  messagingSenderId: '809410271461',
  appId: '1:809410271461:web:5644ed701509b222b0dc0c',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
