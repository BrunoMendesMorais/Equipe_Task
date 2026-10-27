<script setup lang="ts">
defineProps({
  titulo: {
    type: String,
    default: 'Criar telas no figma'
  },
  status: {
    type: String,
    default: 'Entregue'
  },
  descricao: {
    type: String,
    default: 'Criar tela para projeto de TP1 no figma contendo, home, produtos historico, ADM , login e carrinho, considerar d .....'
  },
  data: {
    type: String,
    default: '12/10/2026'
  },
  autor: {
    type: String,
    default: 'Bruno Mendes'
  }
})
</script>

<template>
  <article>
    <header>
      <h2>{{ titulo }}</h2>
      <span>{{ status }}</span>
    </header>

    <p>{{ descricao }}</p>

    <footer>
      <time>{{ data }}</time>
      <span>{{ autor }}</span>
    </footer>
  </article>
</template>

<style scoped>
article {
  background-color: var(--cor-primaria);
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

h2 {
  font-size: var(--texto-normal);
  color: var(--cor-texto-principal);
  margin: 0;
}

header span {
  background-color: var(--cor-positivo);
  color: var(--cor-texto-principal);
  padding: 6px 16px;
  border-radius: 6px;
  flex-shrink: 0;
}

p {
  color: var(--cor-texto-secundaria);
  line-height: 1.5;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

time, footer span {
  color: var(--cor-texto-principal);
}

@media (max-width: 500px) {
  article {
    padding: 20px;
    gap: 20px;
  }

  header {
    flex-direction: column;
  }

  header span {
    margin-top: 10px;
  }

  footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
