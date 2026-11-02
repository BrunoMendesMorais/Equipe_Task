<script setup lang="ts">
import type { Tarefa } from '@/shered/modelTarefa';
import { defineEmits } from "vue";
const emit = defineEmits(['editTarefa'])  

const props = defineProps<{
  tarefa: Tarefa
}>()

const editTarefa = ():void => {
  emit('editTarefa',props.tarefa)
}
</script>

<template>
  <article @click="editTarefa">
    <header>
      <h2>{{ tarefa.titulo }}</h2>
      <span v-if="tarefa.status === 'Aberto'" style="background-color: #013782;">{{ tarefa.status }}</span>
      <span v-if="tarefa.status === 'Em atraso'" style="background-color: #BF000A;">{{ tarefa.status }}</span>
      <span v-if="tarefa.status === 'Fechado'" >{{ tarefa.status }}</span>
    </header>

    <p>{{ tarefa.descricao }}</p>

    <footer>
      <time>{{ tarefa.dataAbertura }}</time>
      <span>{{ tarefa.responsavel }}</span>
    </footer>
  </article>
</template>

<style scoped>
article {
  background-color: var(--cor-primaria);
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

h2 {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
  margin: 0;
}

header span {
  background-color: var(--cor-positivo);
  color: var(--cor-texto-principal);
  width: 150px;
  text-align: center;
  padding: 6px 16px;
  border-radius: 6px;
  flex-shrink: 0;
}

p {
  color: var(--cor-texto-secundaria);
  line-height: 1.5;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

time, footer span {
  color: var(--cor-texto-principal);
}

@media (max-width: 500px) {
  article {
    padding: 20px;
    gap: 20px;
  }

  header {
    flex-direction: column;
  }

  header span {
    margin-top: 10px;
  }

  footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
