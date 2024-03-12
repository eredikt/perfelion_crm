<template>
  <div class="layout">
    <Button class="btn-login" variant="secondary" @click="modal = !modal">Начать работу</Button>
    <p-modal v-model="modal">
      <template #title>авторизация</template>
      <template #body>
        <Input v-model="formModal.login" type="text" placeholder="login"/>
        <Input v-model="formModal.password" type="password" placeholder="pass"/>
      </template>
      <template #actions>
        <Button @click="login" @keyup.enter="login">Войти</Button>
      </template>
    </p-modal>
  </div>
</template>
<script lang="ts" setup>
import {Button} from "@/components/ui/button";
import PModal from "@/components/global/PModal.vue";
import {ref} from "vue";
import {Input} from "@/components/ui/input";
import {account} from "@/lib/appwrite.ts";
import {useAuthStore} from "@/store/auth.store.ts";
import {useRouter} from "vue-router";

const modal = ref<boolean>(false);

interface IForm {
  login: string,
  password: string,
}
const formModal = ref<IForm>({
  login:'',
  password: '',
})
const authStore = useAuthStore();
const router = useRouter();

async function login() {
  await account.createEmailSession(formModal.value.login, formModal.value.password);
  const responce = await account.get();
  if (responce) {
    authStore.set({
      email: responce.email,
      name: responce.name,
      status: responce.status,
    })
    await router.push({name: 'crm'});
  }
}
</script>
<style scoped lang="scss">
.layout {
  background: url("../assets/images/fonPerfelion3.png");
  background-size: 820px;
  @apply flex h-dvh object-cover bg-cover;
  .btn-login {
    @apply ml-auto mr-auto mt-96 py-8 text-2xl text-purple-950;
  }
}
</style>