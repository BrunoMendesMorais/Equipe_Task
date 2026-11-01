<script setup lang="ts">
import { ref, inject, watch, computed } from 'vue'
import type { Reactive, PropType } from 'vue'
import type { Usuario } from '@/shered/modelUser'

const props = defineProps({
  editar: {
    type: Object as PropType<Usuario | null>,
    default: null
  }
})

const emit = defineEmits(['limparSelecao'])

const nome = ref<string>('')
const email = ref<string>('')
const editandoId = ref<number | null>(null)

const usuarios:Usuario[] = inject<Reactive<Usuario[]>>('usuarios',[]);

const sendoEditado = computed(() => props.editar)

const resetarCamposLocais = () => {
  nome.value = ''
  email.value = ''
  editandoId.value = null
}

watch(
  () => props.editar,
  (newUser) => {
    if (newUser) {
      nome.value = newUser.nome
      email.value = newUser.email
      editandoId.value = newUser.id
    } else {
      resetarCamposLocais()
    }
  },
  { immediate: true }
)


const limparFormulario = (): void => {
  resetarCamposLocais()
  emit('limparSelecao') 
}

const salvarUsuario = (): void => {
  if (!nome.value || !email.value) {
    alert('Por favor, preencha nome e e-mail!')
    return
  }

  if (sendoEditado.value && editandoId.value !== null) {

    const index = usuarios.findIndex(u => u.id === editandoId.value)
    
    if (index !== -1) {
      const usuarioSendoEditado = usuarios[index]
      
      if (usuarioSendoEditado) {
        usuarioSendoEditado.nome = nome.value
        usuarioSendoEditado.email = email.value
        alert('Usuário atualizado com sucesso!')
      }
    }
  } else {
    const novoUsuario: Usuario = {
      id: usuarios.length + 1,
      nome: nome.value,
      email: email.value,
      tarefas: 0
    }
    
    if (usuarios) {
      usuarios.push(novoUsuario)
      alert('Usuário cadastrado com sucesso!')
    }
  }
  
  limparFormulario()
}
</script>

<template>
<form @submit.prevent="salvarUsuario">

    <h2>{{ sendoEditado ? 'Editar usuário' : 'Cadastro de usuario' }}</h2>

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
   
      <button type="submit">{{ sendoEditado ? 'Salvar' : 'Cadastrar' }}</button>
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