<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md">
      <q-input dense outlined placeholder="이메일" />
      <q-input dense outlined placeholder="비밀번호" />

      <div>
        <q-btn
          class="full-width"
          color="primary"
          label="로그인하기"
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
        <q-separator />
        <q-btn
          class="full-width"
          color="primary"
          label="구글 계정으로 로그인하기"
          outline
          unelevated
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
defineEmits(['changeView']);
</script>

<style lang="scss" scoped></style>
