import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAdJzQOOwzf7aJUdnv5lELqifzOXaFzO9E',
  authDomain: 'react--expense-tracker.firebaseapp.com',
  databaseURL: 'https://react--expense-tracker.firebaseio.com',
  projectId: 'react--expense-tracker',
  storageBucket: 'react--expense-tracker.appspot.com',
  messagingSenderId: '402368774884',
  appId: '1:402368774884:web:a9738caa7a58412b8122f1',
  measurementId: 'G-C5018ZXQVB',
};
// Initialize Firebase
const app = firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = app.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
