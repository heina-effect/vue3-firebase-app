<template>
  <q-layout class="bg-grey-2" view="lHh Lpr lff">
    <q-header boared class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn dense flat>
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.jpg"/>
            </q-avatar>
            말하는 돌멩이 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space/>
        <q-btn flat label="Home" stretch to="/home"/>
        <q-btn
          flat
          href="https://google.com"
          label="수강하기"
          stretch
          target="_blank"
        />
        <q-btn
          flat
          href="https://edu.gymcoding.com"
          label="온라인 강의"
          stretch
          target="_blank"
        />
        <q-btn
          flat
          href="https://youtube.com"
          label="Youtube"
          stretch
          target="_blank"
        />

        <q-separator class="q-my-md q-mr-md" vertical/>
        <q-btn
          v-if="!authStore.isAuthenticated"
          color="primary"
          label="로그인 / 회원가입"
          rounded
          unelevated
          @click="openAuthDialog"
        />
        <q-btn v-if="authStore.isAuthenticated" flat round>
          <q-avatar>
            <img :src="authStore.user.photoURL || generateDefaultPhotoURL(authStore.user.uid)"/>
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item v-close-popup clickable to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item v-close-popup clickable @click="handleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view/>
    </q-page-container>
    <Authdialog v-model="authDialog"/>
  </q-layout>
</template>
<script setup>
import {useRoute} from 'vue-router';
import {computed, ref} from 'vue';
import Authdialog from 'components/auth/AuthDialog.vue';
import {useAuthStore} from "stores/auth";
import {generateDefaultPhotoURL, logout} from "src/services";

const authStore = useAuthStore();
const route = useRoute();
const pageContainerStyles = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
const handleLogout = async () => {
  await logout();
}
</script>
<style lang="scss" scoped></style>
