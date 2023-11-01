<template>
  <q-page>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:title="form.title"
      >
        <template #actions>
          <q-btn v-close-popup flat label="취소" />
          <q-btn color="primary" flat label="수정" type="submit" />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>
<script>
//객체를 리턴하는 팩토리 함수
//객체를 초기화 시키기 위하여 반복 작업을 없애기 위함
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>
<script setup>
import { ref } from 'vue';
import BaseCard from 'components/base/BaseCard.vue';
import PostForm from 'components/apps/post/PostForm.vue';

const form = ref(getInitialForm());
</script>

<style lang="scss" scoped></style>
<route lang="json">
{
  "meta": { "width": "800px" }
}
</route>
