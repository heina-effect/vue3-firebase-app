import {boot} from 'quasar/wrappers';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useAuthStore} from "stores/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyCwhODySBcUOXZ9xHVZNp57dAXWrgZItQM',
  authDomain: 'heina-vue3-firebase-app.firebaseapp.com',
  projectId: 'heina-vue3-firebase-app',
  storageBucket: 'heina-vue3-firebase-app.appspot.com',
  messagingSenderId: '548759337379',
  appId: '1:548759337379:web:f9d05906e81abcb6e90216',
  measurementId: 'G-DF5CRYHQSF',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};


export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, (user) => {
    console.log('##user: ', user)
    authStore.setUser(user);
  });

});
