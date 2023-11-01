<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
  id: index,
  title: 'Vue3 Firebase 강의' + index,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur at, aut beatae blanditiis dolorum eaque esse fugit, ipsam, itaque libero nisi nostrum officiis recusandae repellat sapiente sint vel vitae!',
  readCount: 1,
  commendCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리',
}));
</script>

<style lang="scss" scoped></style>
