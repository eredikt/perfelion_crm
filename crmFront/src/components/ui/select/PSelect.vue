<script setup lang="ts">

import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import {IProps} from "@/models/components/Select";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";

withDefaults(defineProps<IProps>(), {
  placeholder: 'Выберите значение',
  itemText: 'label',
  itemValue: 'value',
  disabled: false,
  width: '180'
})
</script>

<template>
    <Select>
      <SelectTrigger :class="`w-[${width}px]`">
        <SelectValue :placeholder />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem v-for="(item, idx) in items" :value="item[itemValue]" :key="idx">
            {{ item[itemText] }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
</template>

<style scoped>

</style>