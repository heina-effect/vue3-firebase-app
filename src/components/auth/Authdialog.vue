<template>
  <q-dialog
    :model-value="modelValue"
    transition-hide="none"
    transition-show="none"
    @hide="changeViewMode('SignInForm')"
    @update:model-value="val => $emit('update:modelValue', val)"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <q-btn v-close-popup dense flat icon="close" round />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <!--        <SignInForm
                  v-if="viewMode === 'SignInForm'"
                  @change-view="changeViewMode"
                />
                <SignUpForm
                  v-else-if="viewMode === 'SignUpForm'"
                  @change-view="changeViewMode"
                />
                <FindPasswordForm v-else @change-view="changeViewMode" />-->
        <!--        동적 컴포넌트-->
        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import SignInForm from 'components/auth/SignInForm.vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);

const viewMode = ref('SignInForm'); // SignInForm, SignUpForm, FindPasswordForm
const changeViewMode = mode => (viewMode.value = mode);

/*const authViewComponents = {
  SignInForm,
  SignUpForm,
  FindPasswordForm,
};*/

const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};
</script>

<style lang="scss" scoped></style>
