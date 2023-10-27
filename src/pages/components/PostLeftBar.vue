<template>
  <StickySideBar>
    <q-card bordered flat>
      <q-list bordered separator>
        <q-item v-ripple :active="true" clickable>
          <q-item-section>전체</q-item-section>
        </q-item>
        <q-item
          v-for="category in categories"
          :key="category.value"
          v-ripple
          clickable
        >
          <q-item-section>{{ category.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'components/StickySideBar.vue';
import { getCategories } from 'src/services/category';

const categories = getCategories();
</script>

<style lang="scss" scoped></style>
