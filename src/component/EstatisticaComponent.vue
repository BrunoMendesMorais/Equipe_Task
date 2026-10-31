<script setup lang="ts">
import type { Usuario } from '@/shered/modelUser';
import { computed, inject } from 'vue';
import type { Reactive } from 'vue';

const listaUsusario:Usuario[] = inject<Reactive<Usuario[]>>('usuarios',[])

const totalUsuarios = computed(() => listaUsusario.length);
const totalTarefas = computed(() => {
    return listaUsusario.reduce((total, usuario) => {
        return total + usuario.tarefas;
    }, 0);
});
const mediaTarefas = computed(() => totalTarefas.value / totalUsuarios.value)

</script>

<template>
  <header>
    <p>Total de usuario: {{ totalUsuarios }}</p>
    <p>Total de tickts: {{ totalTarefas }}</p>
    <p>Media de tickts: {{ mediaTarefas }}</p>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  max-width: 1010px;
  background-color: var(--cor-primaria);
  padding: 20px 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  gap: 20px;
}

p {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
  white-space: nowrap;
}

@media (max-width: 1500px) {
  header {
    max-width: 455px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
}
</style>
