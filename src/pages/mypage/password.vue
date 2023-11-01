<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">비밀번호 변경</div>
      <q-form class="q-gutter-y-md q-mt-md">
        <q-input dense label="새로운 비밀번호" outlined type="password" />
        <q-input dense label="새로운 비밀번호 확인" outlined type="password" />
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-space />
      <q-btn color="primary" flat label="저장하기" />
    </q-card-actions>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'components/base/BaseCard.vue';
</script>

<style lang="scss" scoped></style>
