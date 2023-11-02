<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="form.nickname" dense outlined placeholder="닉네임" type="text"/>
      <q-input v-model="form.email" dense outlined placeholder="이메일" type="email"/>
      <q-input v-model="form.password" dense outlined placeholder="비밀번호(문자, 숫자조합 8자 이상)" type="password"/>
      <q-btn class="full-width" color="primary" label="가입하기" type="submit" unelevated/>
      <q-separator/>
      <q-btn
        class="full-width"
        flat
        label="로그인하기"
        unelevated
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {signUpWithEmail} from "src/services";
import {useQuasar} from "quasar";

const $q = useQuasar()


const emit = defineEmits(['changeView', 'closeDialog']);

const form = ref({
  nickname: '',
  email: '',
  password: '',
})
const handleSubmit = async () => {
  await signUpWithEmail(form.value);
  $q.notify('가입을 환영합니다 :)')
  emit('closeDialog');
}
</script>

<style lang="scss" scoped></style>
