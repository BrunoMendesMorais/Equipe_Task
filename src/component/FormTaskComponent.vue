<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { PropType } from 'vue'
import type { Tarefa } from '@/shered/modelTarefa'
import { useRoute } from 'vue-router'

import { useTarefaStore } from '@/store/useTarefaStore'
import { useUsuarioStore } from '@/store/useUsuarioStore'

const props = defineProps({
  taskToEdit: {
    type: Object as PropType<Tarefa | null>,
    default: null
  }
})

const emit = defineEmits(['limparSelecao'])

const route = useRoute()
const autorId: number = parseInt(route.params.id as string)

const tarefaStore = useTarefaStore()
const usuarioStore = useUsuarioStore()

const autor = computed(() => {
  
  return usuarioStore.nomePorid(autorId) || 'Usuário não encontrado'
})

const status = ref<'Aberto' | 'Em atraso' | 'Fechado'>('Aberto')

const dataAtual = new Date().toISOString().split('T')[0]
const dataAbertura = ref(dataAtual)
const dataFechamentoForm = ref(dataAtual)

const titulo = ref('')
const descricao = ref('')

const editandoId = ref<number | null>(null)

const isEditing = computed(() => !!props.taskToEdit)

const formatarData = (data: string): string => {
  if (!data) return ''
  return data.split('-').reverse().join('/')
}

const resetarCamposLocais = (): void => {
  titulo.value = ''
  descricao.value = ''
  status.value = 'Aberto'
  dataAbertura.value = dataAtual
  dataFechamentoForm.value = dataAtual
  editandoId.value = null
}

watch(
  () => props.taskToEdit,
  (newTask) => {
    if (newTask) {
      titulo.value = newTask.titulo
      descricao.value = newTask.descricao
      status.value = newTask.status
      dataAbertura.value = newTask.dataAbertura || dataAtual
      dataFechamentoForm.value = newTask.dataFechamento || dataAtual
      editandoId.value = newTask.id
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

const salvarTarefa = (): void => {
  if (!titulo.value || !descricao.value) {
    alert('Por favor, preencha o título e a descrição!')
    return
  }

  if (isEditing.value && editandoId.value !== null) {
    try {
      tarefaStore.atualizarTarefa(editandoId.value, {
        id: editandoId.value,
        titulo: titulo.value,
        status: status.value,
        descricao: descricao.value,
        dataAbertura: dataAbertura.value ?? '', 
        dataFechamento: dataFechamentoForm.value || null,
        responsavelId: autorId, 
        responsavel: autor.value 
      })
      alert('Tarefa atualizada com sucesso!')
    } catch (erro) {
      alert('Erro ao atualizar a tarefa.')
    }
  } else {
    const totalTarefas = tarefaStore.tarefas.length

    const novaTarefa: Tarefa = {
      id: totalTarefas > 0 ? Math.max(...tarefaStore.tarefas.map(t => t.id)) + 1 : 1, 
      titulo: titulo.value,
      status: status.value,
      descricao: descricao.value,
      dataAbertura: dataAbertura.value ?? '',
      dataFechamento: dataFechamentoForm.value || null,
      responsavelId: autorId,
      responsavel: autor.value 
    }

    tarefaStore.adicionarTarefa(novaTarefa)
    alert('Tarefa cadastrada com sucesso!')
  }
  
  limparFormulario()
}
</script>

<template>
  <form @submit.prevent="salvarTarefa">
    <header>
      <nav>
        <button type="button">
          <img src="/icons/user.svg" alt="">
        </button>
        <strong>{{ autor }}</strong>
      </nav>

      <aside>{{ status }}</aside>
    </header>

    <main>
      <section class="datas-container">
        <time>{{ formatarData(dataAbertura || '' )}}</time>
        <span>a</span>
        <input 
          type="date" 
          v-model="dataFechamentoForm" 
          class="input-data"
        />
      </section>

      <input class="titulo-input" type="text" v-model="titulo" placeholder="Título da tarefa" />

      <textarea v-model="descricao" placeholder="Descreva a tarefa aqui..."></textarea>

      <menu>
        <button type="button" @click="limparFormulario">Cancelar</button>
        <button type="submit">{{ isEditing ? 'Salvar' : 'Cadastrar' }}</button>
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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
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

main {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.datas-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  color: var(--cor-texto-secundaria);
  font-size: var(--texto-secundario);
}

.input-data {
  background: transparent;
  border: none;
  color: var(--cor-texto-secundaria);
  font-size: var(--texto-secundario);
  font-family: inherit;
  outline: none;
  cursor: pointer;
}

.input-data::-webkit-calendar-picker-indicator {
  filter: invert(0.8);
  cursor: pointer;
}

.titulo-input {
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