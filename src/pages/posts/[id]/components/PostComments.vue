<template>
  <div>
    <div class="text-subtitle text-weight-bold q-mb-lg">댓글 6</div>

    <div v-if="isActive">
      <q-input class="bg-white" outlined type="textarea" />
      <div class="flex justify-end q-gutter-x-sm q-mt-sm">
        <q-btn color="dark" label="취소" unelevated @click="toggleActive" />
        <q-btn color="primary" label="등록" unelevated />
      </div>
    </div>
    <BaseCard v-if="!isActive" class="cursor-pointer" @click="toggleActive">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img alt="" src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요</div>
      </q-card-section>
    </BaseCard>
    <CommentList :items="comments" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommentList from 'components/apps/comment/CommentList.vue';
import BaseCard from 'components/base/BaseCard.vue';

const isActive = ref(false);
const toggleActive = () => (isActive.value = !isActive.value);
const comments = ref([{ id: 1 }, { id: 2 }, { id: 3 }]);
</script>

<style lang="scss" scoped></style>
