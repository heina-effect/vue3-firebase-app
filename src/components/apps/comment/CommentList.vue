<template>
  <q-list bordered class="q-mt-lg bg-white" separator>
    <CommentItem v-for="item in items" :key="item.id" v-bind="item" />
  </q-list>
</template>

<script setup>
import CommentItem from 'components/apps/comment/CommentItem.vue';

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
