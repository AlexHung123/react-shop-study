import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA8Jp3kzYR_AD8ma9L5kX3FWMLIYgTBh2M',
  authDomain: 'react-demo-db-a83b9.firebaseapp.com',
  projectId: 'react-demo-db-a83b9',
  storageBucket: 'react-demo-db-a83b9.appspot.com',
  messagingSenderId: '243275509444',
  appId: '1:243275509444:web:8e6198372b6556f38aa391',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
