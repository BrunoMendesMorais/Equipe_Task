<script setup lang="ts"></script>

<template>

  <header id="header_pagina">
    <img src="/logo.png" alt="">
    <button>
      <img src="/icons/users-three.svg" alt="">
      equipe
    </button>
  </header>
  <RouterView></RouterView>
  <footer>
    <article>Projeto desenvolvido por alunos do IFSP - Boituva com intuito academico</article>
    <img src="/logo.png" alt="">
    <section>
      <article>
        <img src="/icons/github-logo-fill.svg" alt="">
        <span>Bruno Mendes</span>
      </article>
      <article>
        <img src="/icons/github-logo-fill.svg" alt="">
        <span>Lucas Rafael</span>
      </article>
      <article>
        <img src="/icons/github-logo-fill.svg" alt="">
        <span>Claudionor Cosme</span>
      </article>
      <article>
        <img src="/icons/github-logo-fill.svg" alt="">
        <span>Marcelo Sampaio</span>
      </article>
      <article>
        <img src="/icons/github-logo-fill.svg" alt="">
        <span>Guilherme Andrade</span>
      </article>
    </section>
  </footer>
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

footer{
  background-color: var(--cor-secundaria);
  width: 100vw;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 33% 34% 33%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
}

header>img{
  height: 120px;
  max-width: 70%;
  object-fit: scale-down;
}
button>img{
  max-width: 100%;
  max-height: 40%;
}

footer>img{
  width: 100%;
  max-width: 300px;
  margin: auto;
}
button{
  background-color: transparent;
  border: none;
  width: 80px;
  height: 120px;
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

footer>article{
  max-width: 80%;
  width: 300px;
  text-align: center;
  margin: auto;
}
section>article{
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
section>article>img{
  height: 85%;
}
section>article>span{
  margin-left: 10px;
}
section{
  margin: auto;
}
@media (max-width: 850px) {
    footer {
        grid-template-columns: 1fr;
        grid-template-rows: 150px 100px 300px;
    }
}
</style>

