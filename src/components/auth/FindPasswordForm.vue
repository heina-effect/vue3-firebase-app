<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 재설정
    </div>
    <q-form class="q-gutter-y-md">
      <q-input dense outlined placeholder="가입한 이메일" />
      <q-btn class="full-width" color="primary" label="확인" unelevated />
      <q-separator />
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
defineEmits(['changeView']);
</script>

<style lang="scss" scoped></style>
