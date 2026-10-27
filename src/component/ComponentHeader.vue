<script setup lang="ts"></script>

<template>
    <header id="header_pagina">
    <img src="/logo.png" alt="">
    <button>
      <img src="/icons/users-three.svg" alt="">
      equipe
    </button>
  </header>
</template>

<style scoped>
header{
  background-color: var(--cor-secundaria);
  width: 100vw;
  height: 140px;
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 10px 30px;
}
header>img{
  height: 120px;
  max-width: 70%;
  object-fit: scale-down;
}
button{
  background-color: transparent;
  border: none;
  width: 80px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}
button:hover{
  transform: scale(1.1);
  transition-duration: 100ms;
  cursor: pointer;
}
</style>

