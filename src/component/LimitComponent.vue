Snippet de código
<script setup lang="ts">
const props = defineProps({
  cor: {
    type: String,
    default: '#fff'
  }
})

const emit = defineEmits(['aumentar', 'reduzir'])
</script>

<template>
  <article>
    <div>
      <span :style="{ backgroundColor: props.cor }"></span>
      <slot></slot>
    </div>

    <menu>
      <button @click="emit('aumentar')">+</button>
      <button @click="emit('reduzir')">-</button>
    </menu>
  </article>
</template>

<style scoped>
article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  background-color: var(--cor-primaria);
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
}

div {
  display: flex;
  align-items: center;
  gap: 20px;
}

span {
  display: inline-block;
  width: 55px;
  height: 55px;
  border-radius: 8px;
}

menu {
  display: flex;
  gap: 10px;
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

button:hover {
  opacity: 0.8;
}

button:active {
  transform: scale(0.95);
}
</style>
