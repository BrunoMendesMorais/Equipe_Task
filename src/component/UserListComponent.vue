<script setup lang="ts">
  import { ref, onMounted, reactive } from 'vue'
  import UserComponent from "@/component/UserComponent.vue";

interface Usuario {
  nome: string
  email: string
  tarefas: number
}

const usuarios = reactive<Usuario[]>(
  [
  {
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "tarefas": 5
  },
  {
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@email.com",
    "tarefas": 8
  },
  {
    "nome": "Pedro Santos",
    "email": "pedro.santos@email.com",
    "tarefas": 3
  },
  {
    "nome": "Ana Costa",
    "email": "ana.costa@email.com",
    "tarefas": 12
  },
  {
    "nome": "Lucas Pereira",
    "email": "lucas.pereira@email.com",
    "tarefas": 7
  },
  {
    "nome": "Juliana Almeida",
    "email": "juliana.almeida@email.com",
    "tarefas": 4
  },
  {
    "nome": "Gabriel Rodrigues",
    "email": "gabriel.rodrigues@email.com",
    "tarefas": 10
  },
  {
    "nome": "Camila Ferreira",
    "email": "camila.ferreira@email.com",
    "tarefas": 6
  },
  {
    "nome": "Rafael Gomes",
    "email": "rafael.gomes@email.com",
    "tarefas": 2
  },
  {
    "nome": "Beatriz Martins",
    "email": "beatriz.martins@email.com",
    "tarefas": 9
  }
]
)

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

