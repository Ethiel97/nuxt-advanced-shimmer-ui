<script setup lang="ts">
interface ShimmerWrapperProps {
  loading?: boolean;
  /**
   * Optional class to be applied when content is loading
   */
  loadingClass?: string;
  /**
   * Optional class to be applied when content is loaded
   */
  loadedClass?: string;
}

const props = withDefaults(defineProps<ShimmerWrapperProps>(), {
  loading: true,
  loadingClass: '',
  loadedClass: '',
});

const slots = useSlots();
const hasLoadingSlot = computed(() => !!slots.loading);
const hasDefaultSlot = computed(() => !!slots.default);
</script>

<template>
  <div
    :class="[loading ? loadingClass : loadedClass]"
    class="ease-in transition-all duration-200"
  >
    <template v-if="loading">
      <Transition name="slide-fade" v-if="hasLoadingSlot">
        <slot name="loading" />
      </Transition>
      <slot name="skeleton" v-else>
        <!-- Default skeleton if no loading slot provided -->
        <USkeleton class="h-4 w-full" />
      </slot>
    </template>
    <Transition name="slide-fade" v-else-if="hasDefaultSlot">
      <slot />
    </Transition>
  </div>
</template>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 2s ease-out;
}

.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
