import { defineStore } from 'pinia'
import type { Usuario } from '@/shered/modelUser'

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    usuarios: [
      {
      "id": 1,
      "nome": "João Silva",
      "email": "joao.silva@email.com",
      "tarefas": 5
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "email": "maria.oliveira@email.com",
      "tarefas": 8
    },
    {
      "id": 3,
      "nome": "Pedro Santos",
      "email": "pedro.santos@email.com",
      "tarefas": 3
    },
    {
      "id": 4,
      "nome": "Ana Costa",
      "email": "ana.costa@email.com",
      "tarefas": 12
    },
    {
      "id": 5,
      "nome": "Lucas Pereira",
      "email": "lucas.pereira@email.com",
      "tarefas": 7
    },
    {
      "id": 6,
      "nome": "Juliana Almeida",
      "email": "juliana.almeida@email.com",
      "tarefas": 4
    },
    {
      "id": 7,
      "nome": "Gabriel Rodrigues",
      "email": "gabriel.rodrigues@email.com",
      "tarefas": 10
    },
    {
      "id": 8,
      "nome": "Camila Ferreira",
      "email": "camila.ferreira@email.com",
      "tarefas": 6
    },
    {
      "id": 9,
      "nome": "Rafael Gomes",
      "email": "rafael.gomes@email.com",
      "tarefas": 2
    },
    {
      "id": 10,
      "nome": "Beatriz Martins",
      "email": "beatriz.martins@email.com",
      "tarefas": 9
    }
    ] as Usuario[]
  }),
  
  actions: {
    adicionarUsuario(usuario: Usuario){
      this.usuarios.push(usuario)
    },
    proxId(){
      return this.usuarios.length
    },
    atualizarUsuario(id: number, dadosAtualizados: Usuario):boolean {
      const index = this.usuarios.findIndex(u => u.id === id)
      if (index !== -1) {
        this.usuarios[index] = { ...dadosAtualizados }
        return true;
      }
      else
        return false;
    },
    listarUsuarios(){
      return this.usuarios
    },
    nomePorid(id:number){
      const index = this.usuarios.findIndex(u => u.id === id)
      if(index != -1){
        return this.usuarios[index]?.nome
      }
      return "Usuário não encontrado"
    }
  }
})