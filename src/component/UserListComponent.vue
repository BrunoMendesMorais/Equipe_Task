<script setup lang="ts">
import { inject, reactive } from 'vue'
import UserComponent from "@/component/UserComponent.vue";
import type { Reactive } from 'vue'
import type { Usuario } from '@/shered/modelUser';

const usuarios:Usuario[] = inject<Reactive<Usuario[]>>('usuarios',[]);

</script>
<template>
  <section>
      <UserComponent v-for="usuario in usuarios" :key="usuario.email" :usuario="usuario"></UserComponent>
  </section>
</template>
<style scoped>

section{
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 450px);
}

@media (min-width: 1500px) {
  section{
    margin: auto;
    grid-template-columns: repeat(2, minmax(auto, 500px));
    justify-content: center;
  }
}
/* @media (min-width: 1580px) {
  section{
    grid-template-columns: repeat(3, minmax(auto, 500px));
  }
} */
</style>

