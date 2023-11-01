<template>
  <q-form>
    <q-card-section class="q-gutter-y-sm">
      <q-input v-model="titleModel" outlined placeholder="제목" />
      <q-select
        v-model="categoryModel"
        :options="categories"
        emit-value
        map-options
        outlined
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">카테고리를 선택하세요.</span>
        </template>
      </q-select>
      <q-input
        v-model="contentModel"
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
    </q-card-section>

    <q-card-actions align="right">
      <slot name="actions">
        <q-btn v-close-popup flat label="취소하기" />
        <q-btn color="primary" flat label="저장하기" type="submit" />
      </slot>
    </q-card-actions>
  </q-form>
</template>

<script setup>
import { computed, defineEmits, ref } from 'vue';
import { getCategories } from 'src/services/category';

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});

// 다중 v-model을 사용할 경우 update-emits 설정 해야함
const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
]);
const titleModel = computed({
  get: () => props.title,
  set: val => emit('update:title', val),
});
const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});
const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

const tagField = ref('');

const removeTag = () => {
  console.log('remove tag');
};

const categories = getCategories();
</script>

<style lang="scss" scoped></style>
