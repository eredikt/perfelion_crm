<script setup lang="ts">
import ICONS from "@/common/icons.ts";
import {Menu} from "@/models/common/Menu.ts";
import PIcon from "@/components/global/PIcon.vue";
import {Button} from "@/components/ui/button";
import {useAuthStore} from "@/store/auth.store.ts";
import {useRouter} from "vue-router";
import {routesName} from "@/common/routeName.ts";

const menuList:Array<Menu> = [
  {
    path: {name: routesName.CRM_GOODS},
    icon: ICONS.DATA,
    title: 'Сборка товаров',
  },
  {
    path: {name: routesName.CRM_WAREHOUSE},
    icon: ICONS.WAREHOUSE,
    title: 'Остатки на складе',
  },
  {
    path: {name: routesName.CRM_ANALYTICS},
    icon: ICONS.ANALYTICS,
    title: 'Аналитика',
  },
];

const auth = useAuthStore();
const router = useRouter();
function logout() {
  auth.set({
    name: '',
    email: '',
    status: false,
  });
  router.push({name: 'general'});
}
</script>

<template>
  <nav class="menu">
    <img src="../../assets/images/logo.png" alt="">
    <hr class="mt-2">
    <router-link
        v-for="(menu, index) in menuList"
        :key="index"
        :to="menu.path"
        class="menu__link"
        active-class="menu__link-active"
    >
      <p-icon :path="menu.icon"/>
      <span class="menu__title">{{menu.title}}</span>
    </router-link>
    <div class="menu__footer">
      <Button variant="link" class="w-full text-white" @click="logout">
       <p-icon :path="ICONS.LOGOUT" class="mr-2"></p-icon> Выйти
      </Button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  @apply h-dvh bg-indigo-900 p-4;
  &__link {
    @apply text-white hover:text-purple-300 flex mt-3;
    &-active {
      @apply text-purple-300;
    }
  }
  &__title {
    margin-left: 15px;
  }
  &__footer {
    margin-top: auto;
  }
}
</style>