<template>
  <StickySideBar>
    <q-btn
      class="full-width"
      color="primary"
      padding="8px 12px 8px 8px"
      text-color="white"
      unelevated
      @click="$emit('openWriteDialog')"
    >
      <q-avatar class="q-mr-sm" color="white" size="22px" text-color="primary">
        <q-icon name="edit" size="14" />
      </q-avatar>
      <span class="text-weight-bold"> 새 포스트 작성하기 </span>
    </q-btn>
    <q-card>
      <q-card-section class="flex items-center q-pb-none">
        <div class="text-weight-bold">태그</div>
        <q-space />
        <q-btn color="grey" dense flat icon="refresh" round size="sm" />
      </q-card-section>
      <q-card-section class="q-pb-sm">
        <q-card bordered class="q-px-sm" flat square>
          <q-input
            borderless
            dense
            input-style="font-size: 12px"
            placeholder="태그를 검색해보세요"
          />

          <div class="q-gutter-sm q-pb-sm">
            <q-btn
              color="grey-3"
              padding="2px 4px 2px 7px"
              size="10px"
              text-color="dark"
              unelevated
            >
              vuejs
              <q-icon color="grey" name="clear" size="12px" />
            </q-btn>
            <q-btn
              color="grey-3"
              padding="2px 4px 2px 7px"
              size="10px"
              text-color="dark"
              unelevated
            >
              react
              <q-icon color="grey" name="clear" size="12px" />
            </q-btn>
          </div>
        </q-card>
      </q-card-section>
      <q-list padding>
        <q-item v-for="tag in tags" :key="tag.name" clickable dense>
          <q-item-section class="text-teal text-caption">
            {{ tag.name }}
          </q-item-section>
          <q-item-section class="text-teal text-caption" side>
            {{ tag.count }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'components/StickySideBar.vue';
import { defineEmits, ref } from 'vue';

defineEmits(['openWriteDialog']);

const tags = ref([
  { name: 'vuejs', count: 10 },
  { name: 'react', count: 5 },
  { name: 'angular', count: 3 },
  { name: 'html', count: 8 },
  { name: 'css', count: 1 },
]);
</script>

<style lang="scss" scoped></style>
