<script setup lang="ts">
// Recebe os valores do componente pai, com valor padrão 0
defineProps({
  totalUsuarios: {
    type: Number,
    default: 0
  },
  totalTickets: {
    type: Number,
    default: 0
  },
  mediaTickets: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <header>
    <p>Total de usuario: {{ totalUsuarios }}</p>
    <p>Total de tickts: {{ totalTickets }}</p>
    <p>Media de tickts: {{ mediaTickets }}</p>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
}
</style>
