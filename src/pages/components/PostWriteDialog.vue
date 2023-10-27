<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup dense flat icon="close" round />
      </q-toolbar>
      <q-separator />
      <q-form class="q-pa-md q-gutter-y-sm">
        <q-input v-model="form.title" outlined placeholder="제목" />
        <q-select v-model="form.category" :options="categories" outlined>
          <template v-if="!form.category" #selected>
            <span class="text-grey-7">카테고리를 선택하세요.</span>
          </template>
        </q-select>
        <q-input
          v-model="form.content"
          outlined
          placeholder="내용을 작성해주세요"
          type="textarea"
        />
        <q-input
          v-model="tagField"
          outlined
          placeholder="태그를 입력해주세요 (입력후 enter)"
          prefix="#"
        />
        <q-chip color="teal" dense outline removable @remove="removeTag"
          >vuejs
        </q-chip>
      </q-form>
      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="취소하기" />
        <q-btn color="primary" flat label="저장하기" type="submit" />
      </q-card-actions>
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
import { getCategories } from 'src/services/category';

const categories = getCategories();

// form 안에 ref 객체로 넣음
const form = ref(getInitialForm());
const tagField = ref('');

const removeTag = () => {
  console.log('remove tag');
};

// getInitialForm()을 통해 form 초기화
const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};
</script>

<style lang="scss" scoped></style>
