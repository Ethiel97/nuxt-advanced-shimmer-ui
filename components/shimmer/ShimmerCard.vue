<script setup lang="ts">
interface ShimmerCardProps {
  loading?: boolean;
  imageHeight?: string;
  imageWidth?: string;
  title?: boolean;
  titleLines?: number;
  bodyLines?: number;
  loadedClass?: string;
  loadingClass?: string;
}

const props = withDefaults(defineProps<ShimmerCardProps>(), {
  loading: true,
  imageHeight: '200px',
  imageWidth: '200px',
  title: true,
  titleLines: 1,
  bodyLines: 3,
  loadedClass: 'rounded-lg border p-4',
  loadingClass: 'flex flex-col space-y-4 rounded-xl',
});
</script>

<template>
  <BaseShimmerWrapper
    :loading="loading"
    loading-class="loadingClass"
    :loaded-class="loadedClass"
  >
    <template #loading>
      <USkeleton
        class="rounded-md"
        v-if="imageHeight"
        :style="{ height: imageHeight, width: imageWidth }"
      />

      <div v-if="title" class="space-y-2">
        <USkeleton
          v-for="i in titleLines"
          :key="`title-${i}`"
          class="h-6"
          :style="{ width: i === 1 ? '80%' : '70%' }"
        />
      </div>

      <div class="flex flex-col space-y-2" v-if="bodyLines">
        <USkeleton
          v-for="i in bodyLines"
          :key="`body-${i}`"
          class="h-4"
          :style="{ width: `${Math.floor(Math.random() * (100 - 70) + 70)}%` }"
        />
      </div>
    </template>

    <slot />
  </BaseShimmerWrapper>
</template>
