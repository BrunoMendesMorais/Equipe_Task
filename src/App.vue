<script setup lang="ts">
  import { reactive, provide } from "vue";
  import AppLayout from "@/shered/layouts/AppLayout.vue";
  import HomeComponent from "@/component/HomeComponent.vue";
  // import TelaTaskComponent from "@/component/TelaTaskComponent.vue";
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
  provide('usuarios',usuarios)
</script>

<template>
  <AppLayout>
    <HomeComponent></HomeComponent>
    <RouterView></RouterView>
  </AppLayout>
</template>
