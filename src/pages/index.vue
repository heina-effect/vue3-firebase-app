<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
  </q-page>
  <PostWriteDialog v-model="postDialog" />
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PostList from 'components/apps/PostList.vue';
import PostHeader from 'pages/components/PostHeader.vue';
import PostLeftBar from 'pages/components/PostLeftBar.vue';
import PostRightBar from 'pages/components/PostRightBar.vue';
import PostWriteDialog from 'pages/components/PostWriteDialog.vue';

const router = useRouter();
const goPostDetails = id => router.push(`/posts/${id}`);

const posts = Array.from(Array(20), (_, index) => ({
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

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};
</script>
<style lang="scss" scoped></style>
