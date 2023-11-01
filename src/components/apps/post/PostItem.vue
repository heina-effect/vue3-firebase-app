<template>
  <q-item :to="`posts/${id}`" class="bg-white q-pt-md" clickable>
    <q-item-section avatar top>
      <q-avatar>
        <img alt="avatar" src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex items-center">
        <span>닉네임 &nbsp;&middot;&nbsp;3일전</span>
        <q-chip class="q-ml-sm" color="primary" square text-color="white">
          {{ category }}
        </q-chip>
      </div>
      <div class="text-h6 q-mt-sm">{{ title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in tags" :key="tag" class="q-mr-sm">#{{ tag }}</span>
      </div>
      <div class="text-gray-6 q-my-ms ellipsis-2-lines">{{ content }}</div>
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              :label="readCount"
              name="sym_o_visibility"
              tooltip="조회수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon :label="commendCount" name="sym_o_sms" tooltip="댓글수" />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" dense flat @click.prevent>
              <PostIcon
                :label="likeCount"
                name="sym_o_favorite"
                tooltip="좋아요"
              />
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" dense flat @click.prevent>
              <PostIcon
                :label="bookmarkCount"
                name="sym_o_bookmark"
                tooltip="북마크"
              />
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineProps } from 'vue';
import PostIcon from 'components/apps/post/PostIcon.vue';

defineProps({
  id: { type: Number },
  title: { type: String },
  content: {
    type: String,
  },
  readCount: {
    type: Number,
    default: 0,
  },
  commendCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  bookmarkCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  createTime: {
    type: Date,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  uid: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
