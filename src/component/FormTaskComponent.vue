<script setup lang="ts">
import { ref } from 'vue'

const autor = ref('Bruno Mendes')
const status = ref('Entregue')
const dataInicio = ref('11/10/2026')
const dataFim = ref('11/10/2026')
const titulo = ref('Criar telas no figma')

const descricao = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
</script>

<template>
  <form @submit.prevent>
    <header>
      <nav>
        <button type="button">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <span>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M20 21a8 8 0 0 0-16 0"></path>
          </svg>
        </span>

        <strong>{{ autor }}</strong>
      </nav>

      <aside>{{ status }}</aside>
    </header>

    <main>
      <section>
        <time>{{ dataInicio }}</time> a <time>{{ dataFim }}</time>
      </section>

      <input type="text" v-model="titulo" placeholder="Título da tarefa" />

      <textarea v-model="descricao" placeholder="Descreva a tarefa aqui..."></textarea>

      <menu>
        <button type="button">Alterar</button>
        <button type="button">Reabrir</button>
      </menu>
    </main>
  </form>
</template>

<style scoped>
form {
  background-color: var(--cor-primaria);
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* --- Cabecalho --- */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  /* Substituído o HEX pela variável de texto secundária para manter consistência */
  border-bottom: 5px solid var(--cor-texto-secundaria);
}

nav {
  display: flex;
  align-items: center;
  gap: 15px;
}

nav button {
  background: transparent;
  border: none;
  color: var(--cor-texto-principal);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
}

nav span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--cor-texto-secundaria);
  border-radius: 50%;
  color: var(--cor-primaria);
}

nav strong {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
  font-weight: 400;
}

header aside {
  background-color: var(--cor-positivo);
  color: var(--cor-texto-principal);
  padding: 6px 16px;
  border-radius: 6px;
  font-size: var(--texto-secundario);
}

/* --- Corpo --- */
main {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  text-align: right;
  color: var(--cor-texto-secundaria);
}

section time {
  color: var(--cor-texto-secundaria);
  font-size: var(--texto-secundario);
}

input {
  background: transparent;
  border: none;
  font-size: var(--texto-titulo);
  color: var(--cor-texto-principal);
  outline: none;
  width: 100%;
}

textarea {
  background: transparent;
  border: none;
  color: var(--cor-texto-secundaria);
  font-size: var(--texto-normal);
  line-height: 1.6;
  width: 100%;
  height: 250px;
  resize: none;
  outline: none;
  overflow-y: auto;
  padding-right: 10px;
}

/* Scrollbar */
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-track {
  background: var(--cor-primaria);
}
textarea::-webkit-scrollbar-thumb {
  background: var(--cor-secundaria);
  border-radius: 4px;
}

/* --- Botões --- */
menu {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
}

menu button {
  background-color: var(--cor-secundaria);
  color: var(--cor-texto-principal);
  border: none;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: var(--texto-normal);
  transition: opacity 0.2s;
}

menu button:hover {
  opacity: 0.8;
}

/* --- Responsividade --- */
@media (max-width: 500px) {
  main {
    padding: 20px;
  }

  menu {
    flex-direction: column;
  }

  menu button {
    width: 100%;
  }
}
</style>
