<template>
  <BaseCard class="q-pa-lg">
    <div class="flex q-mb-md">
      <q-btn
        color="grey"
        dense
        flat
        icon="sym_o_arrow_back"
        round
        size="16px"
      />
      <q-space />
      <q-btn color="red" dense flat icon="sym_o_favorite" round size="16px" />
      <q-btn color="blue" dense flat icon="sym_o_bookmark" round size="16px" />
    </div>
    <div class="flex items-center">
      <q-avatar>
        <img alt="" src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <div class="q-ml-md">
        <div>돌멩이</div>
        <div class="text-grey-6">3일 전</div>
      </div>
      <q-space />
      <q-btn flat icon="more_horiz" round>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              v-close-popup
              :to="`/posts/${$route.params.id}/edit`"
              clickable
            >
              <q-item-section>수정하기</q-item-section>
            </q-item>
            <q-item v-close-popup clickable>
              <q-item-section>삭제하기</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="text-h5 q-mt-md text-weight-bold">제목입니다</div>
    <div class="row items-center q-gutter-x-md q-mt-md justify-end">
      <PostIcon :label="`1`" name="sym_o_visibility" tooltip="조회수" />
      <PostIcon :label="`2`" name="sym_o_sms" tooltip="댓글수" />
      <PostIcon :label="`3`" name="sym_o_favorite" tooltip="좋아요" />
      <PostIcon :label="`4`" name="sym_o_bookmark" tooltip="북마크" />
    </div>
    <q-separator class="q-my-lg" />
    <div>얄리얄리얄라셩</div>
  </BaseCard>
</template>
<script setup>
import PostIcon from 'components/apps/post/PostIcon.vue';
import BaseCard from 'components/base/BaseCard.vue';
</script>
<style lang="scss" scoped></style>
<route lang="json">
{
  "meta": { "width": "800px" }
}
</route>
