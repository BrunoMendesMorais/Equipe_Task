<script setup lang="ts">
  import TaskComponent from "@/component/TaskComponent.vue";
  import { inject, computed } from "vue";
  import { useRoute,  } from 'vue-router';
  import type { Tarefa } from '@/shered/modelTarefa.ts'

  const tarefas:Tarefa[] = inject<Tarefa[]>('tarefas',[])
  
  const route = useRoute();
  const id = Number(route.params.id);
  
const tarefasUsuario = computed(() => {
  if (id) {
    return tarefas.filter(tarefa => tarefa.responsavelId == id)
  }
  return tarefas
});
</script>
<template>
  <section>
    <TaskComponent v-for="tarefa in tarefasUsuario" :key="tarefa.id" :tarefa="tarefa"/>
  </section>
</template>
<style scoped>
</style>
