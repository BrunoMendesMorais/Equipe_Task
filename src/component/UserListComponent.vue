<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import UserComponent from "@/component/UserComponent.vue";

interface Usuario {
  nome: string
  email: string
  tarefas: number
}

const usuarios = ref<Usuario[]>([])
const carregando = ref(true)

const buscarUsuarios = async () => {
  try {
    const resposta = await fetch('/usuarios.json')

    if (!resposta.ok) {
      throw new Error('Erro ao buscar usuários')
    }

    usuarios.value = await resposta.json()

  } catch (erro) {
    console.error(erro)
  } finally {
    carregando.value = false
  }
}

onMounted(() => {
  buscarUsuarios()
})

</script>
<template>
  <section>
      <UserComponent v-for="usuario in usuarios" :key="usuario.email" :usuario="usuario"></UserComponent>
  </section>
</template>
<style scoped>

section{
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 450px);
}

@media (min-width: 1500px) {
  section{
    margin: auto;
    grid-template-columns: repeat(2, minmax(auto, 500px));
    justify-content: center;
  }
}
/* @media (min-width: 1580px) {
  section{
    grid-template-columns: repeat(3, minmax(auto, 500px));
  }
} */
</style>

