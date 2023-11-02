<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="email" dense outlined placeholder="가입한 이메일"/>
      <q-btn class="full-width" color="primary" label="비밀번호 재설정 하기" type="submit" unelevated/>
      <q-separator/>
      <q-btn
        class="full-width"
        flat
        label="로그인 하기"
        outline
        unelevated
        @click="$emit('changeView', 'SignUpForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {sendPasswordReset} from "src/services/auth";
import {useQuasar} from "quasar";

const $q = useQuasar();

const emit = defineEmits(['changeView', 'closeDialog']);
const email = ref('');
const handleSubmit = async () => {
  await sendPasswordReset(email.value);
  //사용시 quasar.config.js flugins 에 'Notify'추가 
  $q.notify('이메일로 비밀번호 재설정 링크를 보냄')
  emit('closeDialog');
}

</script>

<style lang="scss" scoped></style>
