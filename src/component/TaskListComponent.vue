<script setup lang="ts">
  import TaskComponent from "@/component/TaskComponent.vue";
  import { computed, } from "vue";
  import { useRoute,  } from 'vue-router';
  import type { Tarefa } from '@/shered/modelTarefa.ts'
  import { useTarefaStore } from "@/store/useTarefaStore";

  const emit = defineEmits(['editTarefa'])  

  const tarefas:Tarefa[] = useTarefaStore().tarefas;
  
  const route = useRoute();
  const id = Number(route.params.id);
  
const tarefasUsuario = computed(() => {
  if (id) {
    return tarefas.filter(tarefa => tarefa.responsavelId == id)
  }
  return tarefas
});

const editTarefa = (tarefa:Tarefa):void => {
  emit('editTarefa',tarefa)
}
</script>
<template>
  <section>
    <TaskComponent v-for="tarefa in tarefasUsuario" :key="tarefa.id" :tarefa="tarefa" @editTarefa="editTarefa"/>
  </section>
</template>
<style scoped>
</style>
