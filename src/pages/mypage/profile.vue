<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">프로필</div>
      <q-form class="q-gutter-y-md q-mt-md">
        <q-input dense label="닉네임" outlined />
        <q-input dense label="이메일" outlined readonly />
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
