<script setup lang="ts">
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {IModalProps} from "@/models/components/Modal";

const model = defineModel({type: Boolean});

withDefaults(defineProps<IModalProps>(), {
  width: '425px'
})
</script>

<template>
  <Dialog v-model:open="model" >
    <DialogContent :class="`sm:max-w-[${width}]`">
      <DialogHeader>
        <DialogTitle><slot name="title"></slot></DialogTitle>
      </DialogHeader>
      <slot name="body"></slot>
      <DialogFooter>
        <slot name="actions">
          <Button type="submit">
            Save changes
          </Button>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>