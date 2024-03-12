<template>
  <svg
      :width="sizeValue"
      :height="sizeValue"
      :viewBox="viewboxValue"
      :style="styles"
  >
    <path :d="path" />
  </svg>
</template>

<script setup lang="ts">
import {IProps, IStyles, Types} from "@/models/components/Icon";
import {computed, ComputedRef} from "vue";

const types: {[key:string]:Types} = {
  mdi: {
    size: 24,
    viewbox: "0 0 24 24",
  },
  "simple-icons": {
    size: 24,
    viewbox: "0 0 24 24",
  },
  default: {
    size: 0,
    viewbox: "0 0 0 0",
  },
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'mdi',
  size: 24,
  rotate: 0,
  flip: 'horizontal',
});

const styles: ComputedRef<IStyles> = computed(() => ({
  "--sx": ["both", "horizontal"].includes(props.flip) ? "-1" : "1",
  "--sy": ["both", "vertical"].includes(props.flip) ? "-1" : "1",
  "--r": `${isNaN(props.rotate) ? props.rotate : props.rotate + "deg"}`,
}));
const defaults: ComputedRef<Types> = computed(() => types[props.type] || types.default);
const sizeValue: ComputedRef<number> = computed(() => +(props.size || defaults.value.size));
const viewboxValue: ComputedRef<string> = computed(() => props.viewbox || defaults.value.viewbox);

</script>

<style scoped>
svg {
  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}

path {
  fill: currentColor;
}
</style>
