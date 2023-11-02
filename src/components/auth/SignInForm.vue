<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
      <q-input v-model="form.email" dense outlined placeholder="이메일"/>
      <q-input v-model="form.password" dense outlined placeholder="비밀번호" type="password"/>

      <div>
        <q-btn
          class="full-width"
          color="primary"
          label="로그인하기"
          type="submit"
          unelevated
        />
        <div class="flex justify-between">
          <q-btn
            color="secondary"
            dense
            flat
            label="비밀번호 찾기"
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            color="secondary"
            dense
            flat
            label="이메일 가입하기"
            size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
        <q-separator/>
        <q-btn
          class="full-width"
          color="primary"
          label="구글 계정으로 로그인하기"
          outline
          unelevated
          @click="handlesignInGoogle"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import {signInWithEmail, signInWithGoogle} from "src/services";
import {ref} from "vue";
import {useQuasar} from "quasar";

const $q = useQuasar()

const emit = defineEmits(['changeView', 'closeDialog']);
// Email Login
const form = ref({
  email: '',
  password: '',
})

const handleSignInEmail = async () => {
  await signInWithEmail(form.value)
  $q.notify('환영합니다!')
  emit('closeDialog');
}
// google Login
const handlesignInGoogle = async () => {
  await signInWithGoogle();
  $q.notify('환영합니다, 사실 환영 안함 ;)')
  emit('closeDialog');
}
</script>

<style lang="scss" scoped></style>
