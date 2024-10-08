<template>
  <div class="progress" :style="cssVars">
      <div class="progressbar"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  color?: string,
  value?: number,
  maxValue?: number,
  circular?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  color: 'red',
  value: 0,
  maxValue: 1,
});

const cssVars = computed(() => {
  return {
      '--progressbar-color': props.color,
      '--progressbar-value': (props.value * 100)/ props.maxValue + '%',

  }
});

</script>

<style scoped lang="scss">
$progressBackground: #e9ecef;

.progress {
  width: 100%;
  height: 0.5rem;
  background-color: $progressBackground;
}

.progressbar {
  width: var(--progressbar-value);
  height: 100%;
  background-color: var(--progressbar-color);
}

</style>