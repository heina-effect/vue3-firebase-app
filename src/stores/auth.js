import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  //로그인 유무 확인
  const isAuthenticated = computed(() => !!user.value);

  //회원 정보 확인
  const setUser = userData => {
    console.log('userData', userData);
    user.value = userData;
    if (userData) {
      user.value = {
        email: userData.email,
        uid: userData.uid,
        displayName: userData.displayName,
        photoURL: userData.photoURL,
      }
    } else {
      user.value = null
    }
  };
  return {
    user, setUser, isAuthenticated
  };
});
