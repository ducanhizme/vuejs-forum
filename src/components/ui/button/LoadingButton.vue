<template>
    <div class="connective-spinner" :style="{ width: size, height: size }" role="status">
      <svg :width="size" :height="size" viewBox="0 0 100 100" :class="loadingVariant">
        <circle v-for="(circle, index) in circles"
                :key="index"
                :cx="circle.cx"
                :cy="circle.cy"
                :r="circle.r"
                :style="{ fill: color }"
                :class="`circle-${index + 1}`" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: '50px'
  },
  color: {
    type: String,
    default: '#ffffff'
  },
  loadingVariant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'pulse', 'orbit'].includes(value)
  },
});

const circles = computed(() => {
  switch (props.variant) {
    case 'default':
      return [
        { cx: 50, cy: 20, r: 8 },
        { cx: 80, cy: 50, r: 8 },
        { cx: 50, cy: 80, r: 8 },
        { cx: 20, cy: 50, r: 8 }
      ];
    case 'pulse':
      return [
        { cx: 50, cy: 50, r: 20 },
        { cx: 50, cy: 50, r: 35 },
        { cx: 50, cy: 50, r: 50 }
      ];
    case 'orbit':
      return [
        { cx: 50, cy: 50, r: 8 },
        { cx: 85, cy: 50, r: 5 },
        { cx: 50, cy: 85, r: 5 },
        { cx: 15, cy: 50, r: 5 },
        { cx: 50, cy: 15, r: 5 }
      ];
  }
});
</script>

<style scoped>
.connective-spinner {
  display: inline-block;
}

.default .circle-1 { animation: bounce 1.5s ease-in-out infinite; }
.default .circle-2 { animation: bounce 1.5s ease-in-out 0.25s infinite; }
.default .circle-3 { animation: bounce 1.5s ease-in-out 0.5s infinite; }
.default .circle-4 { animation: bounce 1.5s ease-in-out 0.75s infinite; }

.pulse .circle-1 { animation: pulse 1.5s ease-in-out infinite; }
.pulse .circle-2 { animation: pulse 1.5s ease-in-out 0.5s infinite; }
.pulse .circle-3 { animation: pulse 1.5s ease-in-out 1s infinite; }

.orbit .circle-1 { animation: none; }
.orbit .circle-2 { animation: orbit 3s linear infinite; }
.orbit .circle-3 { animation: orbit 3s linear infinite 0.75s; }
.orbit .circle-4 { animation: orbit 3s linear infinite 1.5s; }
.orbit .circle-5 { animation: orbit 3s linear infinite 2.25s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(0.5); opacity: 0.2; }
  50% { transform: scale(1); opacity: 1; }
}

@keyframes orbit {
  from { transform: rotate(0deg) translateX(35px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(35px) rotate(-360deg); }
}
</style>