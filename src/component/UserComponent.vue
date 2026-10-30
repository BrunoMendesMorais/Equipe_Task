<script setup lang="ts">
import { inject, ref } from 'vue';
import type {Ref} from 'vue';

  const taks = 5
  const superior = inject<Ref<number>>('superior',ref(0))
  const inferior = inject<Ref<number>>('inferior',ref(0))

</script>
<template>
  <article>
    <div>
      <section><img src="/icons/user.svg" alt="">Bruno Mendes de Morais</section>
      <a href=""><img src="/icons/pencil-simple.svg" alt=""></a>
    </div>
    <span>mendesdemoraisbruno@gmail.com</span>
    <a href="">Ver Tarefa</a>
    <section v-if="taks > superior" style="color: #F74B54">Tasks:{{ taks }}</section>
    <section v-else-if="taks <= superior && taks > inferior" style="color: #FCE83A">Tasks:{{ taks }}</section>
    <section v-else="">Tasks:{{ taks }}</section>
  </article>
</template>

<style scoped>
  article{
    margin: auto;
    margin-top: 10px;
    width: 455px;
    background-color: var(--cor-primaria);
    padding: 20px;
    display: grid;
    gap: 15px;
    grid-template-areas: "a a""b b""c d";
  }
  article>div{
    display: flex;
    justify-content: space-between;
    height: 60px;
    grid-area: a;
  }
  article>div>section>img{
    height: 90%;
    margin-right: 20px;
  }
  article>div>a>img{
    height: 60%;
  }
  article>div>section{
    align-items: center;
    display: flex;
    width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  article>span{
    grid-area: b;
    margin-left: 76px;
    margin-top: -15px;
    font-size: var(--texto-secundario);
    color: var(--cor-texto-secundaria);
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  article>a{
    margin-top: auto;
    grid-area: c;
    font-size: var(--texto-secundario);
    color: var(--cor-texto-secundaria);
  }
  article>section{
    grid-area: d;
    text-align: end;
  }
</style>
