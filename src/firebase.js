import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFWKWBtqMyTC5er2LABNPknw_rw5MlROo',
  authDomain: 'testing-80dfb.firebaseapp.com',
  databaseURL: 'https://testing-80dfb.firebaseio.com',
  projectId: 'testing-80dfb',
  storageBucket: 'testing-80dfb.appspot.com',
  messagingSenderId: '166369762396',
  appId: '1:166369762396:web:ddabe1f88f7c9bba495a99',
  measurementId: 'G-5Z0WEPGL7H',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
