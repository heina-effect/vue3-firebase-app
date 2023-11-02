import {createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import {auth} from 'src/boot/firebase'

const DEFAULT_PHOTO_URL = 'https://api.dicebear.com/7.x/bottts/svg?seed='

//Firebase Google Login
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const {user} = await signInWithPopup(auth, provider);
  return user;
}

//Firebase Google Logout
export async function logout() {
  await signOut(auth);
}

//Sign Up
export async function signUpWithEmail({email, password, nickname}) {
  const {user} = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {displayName: nickname, photoURL: generateDefaultPhotoURL(user.uid)})
}

// default img url : async 필요 없음
export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`
}

// Sign In
export async function signInWithEmail({email, password}) {
  const {user} = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

//Find Password
export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}
