<script setup lang="ts">
  import AppLayout from "@/shered/layouts/AppLayout.vue";
  import HomeComponent from "@/component/HomeComponent.vue";
  // import TelaTaskComponent from "@/component/TelaTaskComponent.vue";
</script>

<template>
  <AppLayout>
    <HomeComponent></HomeComponent>
    <RouterView></RouterView>
  </AppLayout>
</template>
