<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup dense flat icon="close" round />
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:title="form.title"
      />
      <q-separator />
    </q-card>
  </q-dialog>
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
import PostForm from 'components/apps/post/PostForm.vue';

// form 안에 ref 객체로 넣음
const form = ref(getInitialForm());

// getInitialForm()을 통해 form 초기화
const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};
</script>

<style lang="scss" scoped></style>
