<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const email = ref('')

const limparFormulario = () => {
  nome.value = ''
  email.value = ''
}
</script>

<template>
  <form action="" method="post">
    <h2>Cadastro de usuario</h2>

    <div>
      <label>Nome:</label>
      <input type="text" v-model="nome" placeholder="Bruno Mendes" />
    </div>

    <div>
      <label>E-mail</label>
      <input type="email" v-model="email" placeholder="bruno.morais@aluno.ifsp.edu.br" />
    </div>

    <menu>
      <button type="button" @click="limparFormulario">Cancelar</button>
      <button type="submit">Cadastrar</button>
    </menu>
  </form>
</template>

<style scoped>
form {
  background-color: var(--cor-primaria);
  border-radius: 4px;
  padding: 30px 40px;
  width: 100%;
  max-width: 600px;
  color: var(--cor-texto-principal);
  margin: 0 auto;
}

h2 {
  text-align: center;
  font-size: var(--texto-titulo);
  margin-bottom: 30px;
}

div {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

label {
  width: 90px;
}

input {
  flex: 1;
  background-color: #3b3b3b;
  border: none;
  border-radius: 4px;
  padding: 10px 12px;
  outline: none;
  font-size: var(--texto-secundario);
}

input::placeholder {
  color: #cccccc;
}

menu {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
}

button {
  background-color: var(--cor-secundaria);
  border: none;
  border-radius: 6px;
  padding: 10px 30px;
  cursor: pointer;
}

/* Responsividade para telas menores que 500px */
@media (max-width: 500px) {
  form {
    padding: 20px;
  }

  div {
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }

  menu {
    padding: 0;
  }

  button {
    width: 48%; /* Os botões dividem o espaço disponível */
    padding: 10px 0;
  }
}
</style>
