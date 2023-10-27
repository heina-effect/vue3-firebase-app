<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md">
      <q-input dense outlined placeholder="닉네임" />
      <q-input dense outlined placeholder="이메일" />
      <q-input dense outlined placeholder="비밀번호(문자, 숫자조합 8자 이상)" />
      <q-btn class="full-width" color="primary" label="가입하기" unelevated />
      <q-separator />
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
defineEmits(['changeView']);
</script>

<style lang="scss" scoped></style>
