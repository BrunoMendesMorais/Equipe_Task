<script setup lang="ts">
import { ref, inject } from 'vue'
import type { Reactive } from 'vue'
import type { Usuario } from '@/shered/modelUser'

const nome = ref<string>('')
const email = ref<string>('')

const usuarios:Usuario[] = inject<Reactive<Usuario[]>>('usuarios',[]);

const limparFormulario = (): void => {
  nome.value = ''
  email.value = ''
}

const cadastrarUsuario = (): void => {
  if (!nome.value || !email.value) {
    alert('Por favor, preencha nome e e-mail!')
    return
  }

  const novoUsuario: Usuario = {
    id: usuarios.length + 1,
    nome: nome.value,
    email: email.value,
    tarefas: 0
  }

  if (usuarios) {
    usuarios.push(novoUsuario)
    alert('Usuário cadastrado com sucesso!')
    limparFormulario()
  } else {
    alert('não deu')
  }
}
</script>

<template>
  <form @submit.prevent="cadastrarUsuario">
    <h2>Cadastro de usuario</h2>

    <div>
      <label>Nome:</label>
      <input type="text" v-model="nome" placeholder="Digite o nome" />
    </div>

    <div>
      <label>E-mail</label>
      <input type="email" v-model="email" placeholder="Digite o Email" />
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
    width: 48%; 
    padding: 10px 0;
  }
}
</style>