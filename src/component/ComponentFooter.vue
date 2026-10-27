<script setup lang="ts"></script>
<template>
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
footer{
  background-color: var(--cor-secundaria);

  margin-top: 50px;
  display: grid;
  grid-template-columns: 33% 34% 33%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
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
