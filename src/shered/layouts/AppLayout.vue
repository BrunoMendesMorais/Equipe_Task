<script setup lang="ts">
  import Header from "@/component/ComponentHeader.vue"
  import Footer from "@/component/ComponentFooter.vue"
</script>
<template>
<Header></Header>
<slot></slot>
<Footer></Footer>
</template>

<style scoped>
main{
  min-height: 80vh;
}
</style>

