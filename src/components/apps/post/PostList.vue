<template>
  <q-list bordered separator>
    <PostItem v-for="item in items" :key="item.id" v-bind="item" />
  </q-list>
</template>

<script setup>
import PostItem from 'components/apps/post/PostItem.vue';
import { defineProps } from 'vue';

defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped></style>
