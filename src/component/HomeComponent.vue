<script setup lang="ts">
  import UserListComponent from "@/component/UserListComponent.vue";
  import FormUserComponent from "@/component/FormUserComponent.vue";
  import LimitListComponent from "@/component/LimitListComponent.vue";
  import EstatisticaComponent from "@/component/EstatisticaComponent.vue";

</script>
<template>
  <main class="home">
    <div>
      <EstatisticaComponent/>
      <UserListComponent/>
    </div>
    <div>
      <FormUserComponent/>
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
  width: 95%;
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

