<template>
  <svg 
    width="250" 
    height="250" 
    class="circular-progress" 
    style="--progress: 50"
    :style="cssVariables"
>
  <circle class="bg"></circle>
  <circle class="fg"></circle>
</svg>
</template>


<script setup lang="ts">
import { computed } from "vue";

type sizeRange = 4|5|6|7|9|10|11|12;
type widthRange = 1|2|3|4|5|20;

interface Props {
  size?: sizeRange
  width?: widthRange,
  color?: string,
}

const props = withDefaults(defineProps<Props>(), {
  size: 5,
  width: 20,
  color: "#5394fd",
});

const baseWidth = 50;

const cssVariables = computed(() => {
  const size = baseWidth * props.size;
  const radius = (size - props.width) / 2;
  return {
    "--size": `${size}px`,
    "--half-size": `${size / 2}px`,
    "--stroke-width": `${props.width}px`,
    "--radius": `${radius}px`,
    "--circumference": `${radius * Math.PI * 2}`,
  }
});

</script>

<style scoped lang="scss">
.circular-progress {
  --dash: calc((var(--progress) * var(--circumference)) / 100);
  animation: progress-animation 5s linear 0s 1 forwards;
}

.circular-progress circle {
  cx: var(--half-size);
  cy: var(--half-size);
  r: var(--radius);
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap: round;
}

.circular-progress circle.bg {
  stroke: #ddd;
}

.circular-progress circle.fg {
  transform: rotate(-90deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: #5394fd;
}

/*
@property --progress {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

@keyframes progress-animation {
  from {
    --progress: 0;
  }
  to {
    --progress: 100;
  }
}
  */
</style>