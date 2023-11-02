import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {auth} from 'src/boot/firebase'

//Firebase Google Login
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log('user', result.user)
}

//Firebase Google Logout
export async function logout() {
  await signOut(auth);
}
