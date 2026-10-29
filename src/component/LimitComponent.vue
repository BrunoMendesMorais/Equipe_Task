<script setup lang="ts">
const props = defineProps({
  cor: {
    type: String,
    default: '#fff'
  }
})

</script>

<template>
  <article>
    <div>
      <span :style="{ backgroundColor: props.cor }"></span>
      <slot name="mensage"></slot>
    </div>

    <menu>
      <slot name="button"></slot>
    </menu>
  </article>
</template>

<style scoped>
article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
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

button:hover {
  opacity: 0.8;
}

button:active {
  transform: scale(0.95);
}
</style>
