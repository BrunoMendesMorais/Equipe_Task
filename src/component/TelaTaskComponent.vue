<script setup lang="ts">
  import FormTaskComponent from "@/component/FormTaskComponent.vue";
  import TaskListComponent from "@/component/TaskListComponent.vue";
  import type { Tarefa } from "@/shered/modelTarefa";
  import { ref } from 'vue'

  const tarefaSelecionada = ref<Tarefa | null>(null)

  const editTarefa = (tarefa: Tarefa) => {
    tarefaSelecionada.value = tarefa
  }
</script>
<template>
  <main>
    <section>
      <TaskListComponent @editTarefa="editTarefa"></TaskListComponent>
    </section>
    <section>
     <FormTaskComponent :taskToEdit="tarefaSelecionada" @limparSelecao="tarefaSelecionada = null"></FormTaskComponent>
    </section>
  </main>
</template>
<style scoped>
  section{
    display: flex;
    flex-direction: column;
  }
  main{
    max-width: 1500px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    margin-top: 40px;
  }
  @media (max-width: 1500px){
    main{
        flex-direction: column-reverse;
        align-items: center;
        gap: 40px;
    }
  }
</style>
