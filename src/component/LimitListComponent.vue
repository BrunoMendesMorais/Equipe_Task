<script setup lang="ts">
import { inject } from 'vue'
import LimitComponent from "@/component/LimitComponent.vue";

let limiteInferior:number = inject('inferior',0)
let limiteSuperior:number = inject('superior',0)

const aumentarInferior = () => {
  if(limiteInferior < limiteSuperior) limiteInferior++
}
const reduzirInferior = () => {
  if (limiteInferior > 0) limiteInferior--
}

const aumentarSuperior = () => limiteSuperior++
const reduzirSuperior = () => {
  if (limiteSuperior > limiteInferior) limiteSuperior--
}
</script>

<template>
  <menu>

    <LimitComponent cor="#FFFFFF">

      <template #mensage>
        <p>De 0 até {{ limiteInferior }} task</p>
      </template>

      <template #button>
        <button @click='aumentarInferior'>+</button>
        <button @click='reduzirInferior'>-</button>
      </template>

    </LimitComponent>

    <LimitComponent cor="#FCE83A">
      <template #mensage>
        <p>De {{ limiteInferior }} até {{ limiteSuperior }} task</p>
      </template>
      <template #button>
        <button @click='aumentarSuperior'>+</button>
        <button @click='reduzirSuperior'>-</button>
      </template>
    </LimitComponent>


    <LimitComponent cor="#F74B54">
      <template #mensage>
        <p>Apartir de {{ limiteSuperior }} task</p>
      </template>
    </LimitComponent>
  </menu>
</template>

<style scoped>
menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

p {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
}

button {
  background-color: var(--cor-secundaria);
  color: var(--cor-texto-principal);
  border: none;
  border-radius: 6px;
  width: 45px;
  height: 45px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
</style>
