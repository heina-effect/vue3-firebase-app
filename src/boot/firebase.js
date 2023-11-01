import { boot } from 'quasar/wrappers';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwhODySBcUOXZ9xHVZNp57dAXWrgZItQM',
  authDomain: 'heina-vue3-firebase-app.firebaseapp.com',
  projectId: 'heina-vue3-firebase-app',
  storageBucket: 'heina-vue3-firebase-app.appspot.com',
  messagingSenderId: '548759337379',
  appId: '1:548759337379:web:f9d05906e81abcb6e90216',
  measurementId: 'G-DF5CRYHQSF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
