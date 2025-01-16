<script setup lang="ts">
interface ShimmerTextProps {
  loading?: boolean;
  lines?: number;
  lineHeight?: number;
  loadingClass?: string;
  /**
   * Varies the width of each line to make it look more natural
   */
  randomWidth?: boolean;
  loadedClass?: string;
}

const props = withDefaults(defineProps<ShimmerTextProps>(), {
  loading: true,
  lines: 1,
  randomWidth: true,
  lineHeight: 2,
  loadingClass: 'w-1/2',
  loadedClass: 'text-gray-800',
});

const getLineWidth = () => {
  if (!props.randomWidth) return '100%';
  return `${Math.floor(Math.random() * (100 - 70) + 70)}%`;
};
</script>

<template>
  <BaseShimmerWrapper
    :loading="loading"
    :loadingClass="loadingClass"
    :loadedClass="loadedClass"
  >
    <template #loading>
      <div class="flex flex-col space-y-2">
        <USkeleton
          class="h-4"
          v-for="i in lines"
          :key="i"
          :style="{ width: getLineWidth() }"
        />
      </div>
    </template>
    <slot />
  </BaseShimmerWrapper>
</template>
