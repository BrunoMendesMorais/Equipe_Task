<script setup lang="ts">
  import { ref, provide } from 'vue'
  import UserListComponent from "@/component/UserListComponent.vue";
  import FormUserComponent from "@/component/FormUserComponent.vue";
  import LimitListComponent from "@/component/LimitListComponent.vue";
  import EstatisticaComponent from "@/component/EstatisticaComponent.vue";
  import type { Usuario } from '@/shered/modelUser';
  
  const usuarioSelecionado = ref<Usuario | null>(null);
    
  const editarUsuario = (usuario: Usuario) => {
    usuarioSelecionado.value = usuario;
  };

  const limiteInferior = ref(5)
  const limiteSuperior = ref(10)

  provide("inferior", limiteInferior);
  provide("superior", limiteSuperior);
</script>

<template>
  <main class="home">
    <div>
      <EstatisticaComponent/>
      <UserListComponent @editarUsuario="editarUsuario"/>
    </div>
    <div>
      <FormUserComponent 
  :userToEdit="usuarioSelecionado" 
    @limparSelecao="usuarioSelecionado = null" 
/>
      <LimitListComponent/>
    </div>
  </main>
</template>

<style scoped>
.home>div{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
}
.home{
  display: grid;
  grid-template-columns: 65% 35%;
  max-width: 1600px;
  margin: auto;
}
  @media (max-width: 1500px){
  .home{
    grid-template-columns: 500px 1fr;
  }
 @media (max-width: 950px){
  .home{
    grid-template-columns: 1fr;
  }
 }
}
</style>

