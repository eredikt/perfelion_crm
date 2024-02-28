<template>
  <v-app>
    <div class="d-none d-sm-flex py-3 justify-center bg-blue-grey-darken-1">
      <v-btn
        v-for="(menu, idx) in menus"
        :key="idx"
        :text="menu.title" :to="menu.path"
        elevation="0"
        variant="text"
        color="white"
        :class="{'link-active': route.fullPath === menu.path}"
        :active="false"
      />
    </div>
    <v-app-bar
      scroll-behavior="elevate"
      class="d-flex d-sm-none bg-blue-grey-darken-1"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(menu, idx) in menus"
          :title="menu.title"
          :key="idx"
          :to="menu.path"
          active-class="yellow-lighten-4"
          color="grey-lighten-1"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <default-view />
    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './View.vue';
  import {useRoute} from "vue-router";
  import {ref} from "vue";
  import {IMenu} from "@/types/menu";

  const route = useRoute();
  const drawer = ref<boolean>(false);
  const menus = ref<IMenu[]>([
    {
      path: '/',
      title: 'Упаковка изделия',
    },
    {
      path: '/remains',
      title: 'Остатки на складе',
    },
    {
      path: '/calculation',
      title: 'Расчёт зарплаты',
    },
  ])
</script>
<style scoped>
.link-active {
  color: yellow !important;
}
</style>
