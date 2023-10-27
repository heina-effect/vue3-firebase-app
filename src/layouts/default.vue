<template>
  <q-layout class="bg-grey-2" view="lHh Lpr lff">
    <q-header boared class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn dense flat>
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.jpg" />
            </q-avatar>
            말하는 돌멩이 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn flat label="Home" stretch to="/home" />
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

        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          color="primary"
          label="로그인 / 회원가입"
          rounded
          unelevated
          @click="openAuthDialog"
        />
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <Authdialog v-model="authDialog" />
  </q-layout>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

import Authdialog from 'components/auth/Authdialog.vue';

const route = useRoute();
const pageContainerStyles = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
</script>
<style lang="scss" scoped></style>
