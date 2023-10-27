<template>
  <q-page padding>
    <div class="text-h4">Home</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}번 게시글</q-card-section>
      </q-card>
    </section>
  </q-page>
</template>
<script setup></script>
<route lang="json">
{
  "name": "home-page",
  "meta": { "requiresAuth": true, "width": "600px" }
}
</route>
