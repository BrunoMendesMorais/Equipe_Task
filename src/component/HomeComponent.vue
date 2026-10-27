<script setup lang="ts">
  import UserListComponent from "@/component/UserListComponent.vue";
  import FormUserComponent from "@/component/FormUserComponent.vue";
  import LimitListComponent from "@/component/LimitListComponent.vue";
  import EstatisticaComponent from "@/component/EstatisticaComponent.vue";

</script>
<template>
  <section class="home">
    <div>
      <EstatisticaComponent/>
      <UserListComponent/>
    </div>
    <div>
      <FormUserComponent/>
      <LimitListComponent/>
    </div>
  </section>
</template>

<style scoped>
.home>div{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
.home{
  display: grid;
  grid-template-columns: 65% 35%;
  max-width: 1600px;
  margin: auto;
}
</style>

