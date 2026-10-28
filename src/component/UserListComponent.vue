<script setup lang="ts">
  import UserComponent from "@/component/UserComponent.vue";
</script>
<template>
  <section>
      <UserComponent></UserComponent>
      <UserComponent></UserComponent>
      <UserComponent></UserComponent>
      <UserComponent></UserComponent>
      <UserComponent></UserComponent>
      <UserComponent></UserComponent>
      <UserComponent></UserComponent>
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

