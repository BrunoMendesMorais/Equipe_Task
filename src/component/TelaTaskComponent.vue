<script setup lang="ts">
 import FormTaskComponent from "@/component/FormTaskComponent.vue";
 import TaskListComponent from "@/component/TaskListComponent.vue";
 import FiterTaskComponent from "@/component/FilterTaskComponent.vue";
</script>
<template>
  <main>
    <section>
      <FiterTaskComponent></FiterTaskComponent>
      <TaskListComponent></TaskListComponent>
    </section>
    <section>
      <FormTaskComponent></FormTaskComponent>
    </section>
  </main>
</template>
<style scoped>
  section{
    display: flex;
    flex-direction: column;
  }
  main{
    max-width: 1500px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    margin-top: 40px;
  }
  @media (max-width: 1500px){
    main{
        flex-direction: column-reverse;
        align-items: center;
        gap: 40px;
    }
  }
</style>
