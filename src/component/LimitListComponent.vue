<script setup lang="ts">
import { ref } from 'vue'
import LimitComponent from "@/component/LimitComponent.vue";

const limiteInferior = ref(5)
const limiteSuperior = ref(10)

const aumentarInferior = () => limiteInferior.value++
const reduzirInferior = () => {
  if (limiteInferior.value > 0) limiteInferior.value--
}

const aumentarSuperior = () => limiteSuperior.value++
const reduzirSuperior = () => {
  if (limiteSuperior.value > limiteInferior.value) limiteSuperior.value--
}
</script>

<template>
  <menu>

    <LimitComponent
      cor="#FFFFFF"
      @aumentar="aumentarInferior"
      @reduzir="reduzirInferior"
    >
      <p>De 0 até {{ limiteInferior }} task</p>
    </LimitComponent>

    <LimitComponent
      cor="#FCE83A"
      @aumentar="aumentarSuperior"
      @reduzir="reduzirInferior"
    >
      <p>De {{ limiteInferior }} até {{ limiteSuperior }} task</p>
    </LimitComponent>


    <LimitComponent
      cor="#F74B54"
      @aumentar="aumentarSuperior"
      @reduzir="reduzirSuperior"
    >
      <p>Apartir de {{ limiteSuperior }} task</p>
    </LimitComponent>
  </menu>
</template>

<style scoped>
menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

p {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
}
</style>
