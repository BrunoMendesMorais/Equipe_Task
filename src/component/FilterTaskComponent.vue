<script setup lang="ts">
import { ref } from 'vue'

const dataInicio = ref('')
const dataFim = ref('')
const status = ref('')
const pesquisa = ref('')

const emit = defineEmits(['adicionar', 'pesquisar'])
</script>

<template>
  <form @submit.prevent>
    <fieldset>
      <label>Expira de:</label>
      <input type="date" v-model="dataInicio" />

      <span>a</span>
      <input type="date" v-model="dataFim" />

      <label>Status:</label>
      <select v-model="status">
        <option value="">Todos</option>
        <option value="entregue">Entregue</option>
        <option value="pendente">Pendente</option>
      </select>
    </fieldset>

    <menu>
      <label>
        <input
          type="text"
          placeholder="Pesquisa ..."
          v-model="pesquisa"
          @keyup.enter="emit('pesquisar', pesquisa)"
        />
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </label>

      <button type="button" @click="emit('adicionar')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Adicionar
      </button>
    </menu>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  color-scheme: dark;
}

fieldset {
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

fieldset label, fieldset span {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
  white-space: nowrap;
}

fieldset input, fieldset select {
  background-color: var(--cor-primaria);
  color: var(--cor-texto-principal);
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: var(--texto-normal);
  outline: none;
  flex: 1;
  min-width: 130px;
}

menu {
  display: flex;
  align-items: stretch;
  gap: 15px;
}

menu label {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: var(--cor-primaria);
  border-radius: 4px;
  padding: 0 15px;
}

menu label input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--cor-texto-principal);
  font-size: var(--texto-normal);
  outline: none;
  padding: 10px 0;
}

menu label input::placeholder {
  color: var(--cor-texto-secundaria);
}

menu label svg {
  color: var(--cor-texto-secundaria);
  cursor: pointer;
}

menu button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--cor-primaria);
  color: var(--cor-texto-principal);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: var(--texto-normal);
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}

menu button:hover {
  opacity: 0.8;
}

@media (max-width: 600px) {
  fieldset {
    flex-direction: column;
    align-items: flex-start;
  }

  fieldset input, fieldset select {
    width: 100%;
    box-sizing: border-box;
  }

  fieldset span {
    align-self: center;
  }

  menu {
    flex-direction: column;
  }

  menu label {
    width: 100%;
    box-sizing: border-box;
  }

  menu button {
    width: 100%;
    padding: 15px;
  }
}
</style>
