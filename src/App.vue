<script setup lang="ts">
import { reactive, provide } from "vue";
import AppLayout from "@/shered/layouts/AppLayout.vue";
import type { Tarefa } from '@/shered/modelTarefa';

interface Usuario {
  id: number
  nome: string
  email: string
  tarefas: number
}

  const usuarios = reactive<Usuario[]>([])

const tarefas = reactive<Tarefa[]>([
  
]);


provide('usuarios',usuarios)
provide('tarefas',tarefas)
</script>

<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>
