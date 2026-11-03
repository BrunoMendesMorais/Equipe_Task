import { defineStore } from 'pinia'
import type { Tarefa } from '@/shered/modelTarefa'

export const useTarefaStore = defineStore('tarefa', {
  state: () => ({
    tarefas: [] as Tarefa[]
  }),
  actions: {
    adicionarTarefa(tarefa: Tarefa) {
      this.tarefas.push(tarefa)
    },
    atualizarTarefa(id: number, dadosAtualizados: Tarefa) {
      const index = this.tarefas.findIndex(t => t.id === id)
      if (index !== -1) {
        this.tarefas[index] = { ...dadosAtualizados }
      }
    }
  }
})