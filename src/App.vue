<script setup lang="ts">
import { reactive, provide } from "vue";
import AppLayout from "@/shered/layouts/AppLayout.vue";
import type { Tarefa } from '@/shered/modelTarefa';

interface Usuario {
  id: number
  nome: string
  email: string
  tarefas: number
}

  const usuarios = reactive<Usuario[]>(
    [
    
  ]
)

const tarefas = reactive<Tarefa[]>([
  // João Silva - 5 tarefas
  { id: 1, titulo: 'Configurar ambiente de desenvolvimento', status: 'Fechado', descricao: 'Preparar o ambiente e instalar as dependências do projeto.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-03', responsavelId: 1, responsavel: 'João Silva' },
  { id: 2, titulo: 'Corrigir erro de autenticação', status: 'Aberto', descricao: 'Investigar falhas no processo de login dos usuários.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 1, responsavel: 'João Silva' },
  { id: 3, titulo: 'Atualizar documentação', status: 'Em atraso', descricao: 'Documentar as funcionalidades implementadas no sistema.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 1, responsavel: 'João Silva' },
  { id: 4, titulo: 'Revisar interface de cadastro', status: 'Fechado', descricao: 'Revisar os campos e validações da tela de cadastro.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-06', responsavelId: 1, responsavel: 'João Silva' },
  { id: 5, titulo: 'Implementar recuperação de senha', status: 'Em atraso', descricao: 'Criar funcionalidade para recuperação de senha.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 1, responsavel: 'João Silva' },

  // Maria Oliveira - 8 tarefas
  { id: 6, titulo: 'Criar tela de usuários', status: 'Fechado', descricao: 'Desenvolver tela para visualizar os usuários cadastrados.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-04', responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 7, titulo: 'Implementar filtros', status: 'Aberto', descricao: 'Adicionar filtros por nome e e-mail na listagem.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 8, titulo: 'Validar formulários', status: 'Em atraso', descricao: 'Adicionar validações aos formulários do sistema.', dataAbertura: '2026-10-08', dataFechamento: null, responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 9, titulo: 'Criar componente de tabela', status: 'Fechado', descricao: 'Desenvolver componente reutilizável para tabelas.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-07', responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 10, titulo: 'Ajustar responsividade', status: 'Aberto', descricao: 'Corrigir problemas de layout em dispositivos móveis.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 11, titulo: 'Implementar paginação', status: 'Em atraso', descricao: 'Adicionar paginação na listagem de registros.', dataAbertura: '2026-10-12', dataFechamento: null, responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 12, titulo: 'Revisar acessibilidade', status: 'Fechado', descricao: 'Melhorar acessibilidade dos componentes da interface.', dataAbertura: '2026-10-03', dataFechamento: '2026-10-09', responsavelId: 2, responsavel: 'Maria Oliveira' },
  { id: 13, titulo: 'Criar tela de configurações', status: 'Em atraso', descricao: 'Desenvolver área de configurações da conta.', dataAbertura: '2026-10-18', dataFechamento: null, responsavelId: 2, responsavel: 'Maria Oliveira' },

  // Pedro Santos - 3 tarefas
  { id: 14, titulo: 'Configurar banco de dados', status: 'Fechado', descricao: 'Criar tabelas e configurar conexões com o banco.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-03', responsavelId: 3, responsavel: 'Pedro Santos' },
  { id: 15, titulo: 'Implementar CRUD de produtos', status: 'Aberto', descricao: 'Desenvolver operações de cadastro, consulta, edição e exclusão.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 3, responsavel: 'Pedro Santos' },
  { id: 16, titulo: 'Otimizar consultas SQL', status: 'Em atraso', descricao: 'Analisar e melhorar o desempenho das consultas.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 3, responsavel: 'Pedro Santos' },

  // Ana Costa - 12 tarefas
  { id: 17, titulo: 'Desenvolver dashboard', status: 'Fechado', descricao: 'Criar painel com indicadores gerais do sistema.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-05', responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 18, titulo: 'Criar gráficos estatísticos', status: 'Aberto', descricao: 'Implementar gráficos para visualização de indicadores.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 19, titulo: 'Implementar notificações', status: 'Em atraso', descricao: 'Criar sistema de notificações para os usuários.', dataAbertura: '2026-10-08', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 20, titulo: 'Revisar layout do dashboard', status: 'Fechado', descricao: 'Ajustar espaçamentos, cores e disposição dos elementos.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-06', responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 21, titulo: 'Criar relatório de atividades', status: 'Aberto', descricao: 'Desenvolver relatório de atividades dos usuários.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 22, titulo: 'Implementar exportação PDF', status: 'Em atraso', descricao: 'Permitir exportação dos relatórios em PDF.', dataAbertura: '2026-10-12', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 23, titulo: 'Adicionar indicadores de desempenho', status: 'Fechado', descricao: 'Exibir indicadores de desempenho no painel.', dataAbertura: '2026-10-03', dataFechamento: '2026-10-08', responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 24, titulo: 'Criar filtros de período', status: 'Em atraso', descricao: 'Adicionar filtros por data nos relatórios.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 25, titulo: 'Corrigir gráficos', status: 'Aberto', descricao: 'Corrigir inconsistências nos dados apresentados.', dataAbertura: '2026-10-16', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 26, titulo: 'Documentar indicadores', status: 'Fechado', descricao: 'Documentar a origem e o significado dos indicadores.', dataAbertura: '2026-10-04', dataFechamento: '2026-10-09', responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 27, titulo: 'Implementar pesquisa avançada', status: 'Em atraso', descricao: 'Adicionar pesquisa avançada aos registros.', dataAbertura: '2026-10-18', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },
  { id: 28, titulo: 'Testar responsividade do painel', status: 'Aberto', descricao: 'Validar o dashboard em diferentes resoluções.', dataAbertura: '2026-10-20', dataFechamento: null, responsavelId: 4, responsavel: 'Ana Costa' },

  // Lucas Pereira - 7 tarefas
  { id: 29, titulo: 'Criar API de usuários', status: 'Fechado', descricao: 'Implementar endpoints de gerenciamento de usuários.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-04', responsavelId: 5, responsavel: 'Lucas Pereira' },
  { id: 30, titulo: 'Implementar autenticação JWT', status: 'Aberto', descricao: 'Criar autenticação utilizando tokens JWT.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 5, responsavel: 'Lucas Pereira' },
  { id: 31, titulo: 'Criar middleware de autorização', status: 'Em atraso', descricao: 'Restringir acesso às rotas conforme permissões.', dataAbertura: '2026-10-08', dataFechamento: null, responsavelId: 5, responsavel: 'Lucas Pereira' },
  { id: 32, titulo: 'Testar endpoints', status: 'Fechado', descricao: 'Executar testes nos endpoints da aplicação.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-06', responsavelId: 5, responsavel: 'Lucas Pereira' },
  { id: 33, titulo: 'Implementar logs', status: 'Aberto', descricao: 'Adicionar registros de eventos e erros da aplicação.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 5, responsavel: 'Lucas Pereira' },
  { id: 34, titulo: 'Revisar segurança da API', status: 'Em atraso', descricao: 'Verificar vulnerabilidades e permissões dos endpoints.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 5, responsavel: 'Lucas Pereira' },
  { id: 35, titulo: 'Documentar endpoints', status: 'Fechado', descricao: 'Documentar os endpoints e seus parâmetros.', dataAbertura: '2026-10-03', dataFechamento: '2026-10-08', responsavelId: 5, responsavel: 'Lucas Pereira' },

  // Juliana Almeida - 4 tarefas
  { id: 36, titulo: 'Criar protótipo de login', status: 'Fechado', descricao: 'Desenhar protótipo da tela de autenticação.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-02', responsavelId: 6, responsavel: 'Juliana Almeida' },
  { id: 37, titulo: 'Desenvolver menu lateral', status: 'Aberto', descricao: 'Implementar navegação lateral da aplicação.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 6, responsavel: 'Juliana Almeida' },
  { id: 38, titulo: 'Padronizar componentes visuais', status: 'Em atraso', descricao: 'Definir padrões visuais para os componentes.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 6, responsavel: 'Juliana Almeida' },
  { id: 39, titulo: 'Revisar identidade visual', status: 'Fechado', descricao: 'Revisar cores, tipografia e elementos visuais.', dataAbertura: '2026-10-03', dataFechamento: '2026-10-07', responsavelId: 6, responsavel: 'Juliana Almeida' },

  // Gabriel Rodrigues - 10 tarefas
  { id: 40, titulo: 'Implementar testes unitários', status: 'Fechado', descricao: 'Criar testes unitários para os principais serviços.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-05', responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 41, titulo: 'Testar fluxo de cadastro', status: 'Aberto', descricao: 'Validar o fluxo completo de cadastro de usuários.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 42, titulo: 'Testar autenticação', status: 'Em atraso', descricao: 'Validar login, logout e recuperação de senha.', dataAbertura: '2026-10-08', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 43, titulo: 'Criar testes de integração', status: 'Fechado', descricao: 'Validar comunicação entre módulos da aplicação.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-07', responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 44, titulo: 'Validar formulários', status: 'Aberto', descricao: 'Testar regras de validação dos formulários.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 45, titulo: 'Verificar compatibilidade', status: 'Em atraso', descricao: 'Testar aplicação em diferentes navegadores.', dataAbertura: '2026-10-12', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 46, titulo: 'Testar desempenho', status: 'Fechado', descricao: 'Avaliar o tempo de resposta da aplicação.', dataAbertura: '2026-10-03', dataFechamento: '2026-10-09', responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 47, titulo: 'Registrar bugs encontrados', status: 'Em atraso', descricao: 'Documentar falhas identificadas durante os testes.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 48, titulo: 'Validar acessibilidade', status: 'Aberto', descricao: 'Verificar navegação por teclado e leitores de tela.', dataAbertura: '2026-10-16', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },
  { id: 49, titulo: 'Criar relatório de testes', status: 'Em atraso', descricao: 'Consolidar resultados dos testes realizados.', dataAbertura: '2026-10-20', dataFechamento: null, responsavelId: 7, responsavel: 'Gabriel Rodrigues' },

  // Camila Ferreira - 6 tarefas
  { id: 50, titulo: 'Implementar busca de produtos', status: 'Fechado', descricao: 'Criar mecanismo de busca por nome de produto.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-04', responsavelId: 8, responsavel: 'Camila Ferreira' },
  { id: 51, titulo: 'Criar filtros por categoria', status: 'Aberto', descricao: 'Permitir filtrar produtos por categoria.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 8, responsavel: 'Camila Ferreira' },
  { id: 52, titulo: 'Implementar ordenação', status: 'Em atraso', descricao: 'Adicionar ordenação por preço e nome.', dataAbertura: '2026-10-08', dataFechamento: null, responsavelId: 8, responsavel: 'Camila Ferreira' },
  { id: 53, titulo: 'Revisar detalhes do produto', status: 'Fechado', descricao: 'Ajustar apresentação das informações dos produtos.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-06', responsavelId: 8, responsavel: 'Camila Ferreira' },
  { id: 54, titulo: 'Implementar galeria de imagens', status: 'Aberto', descricao: 'Criar galeria de imagens para os produtos.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 8, responsavel: 'Camila Ferreira' },
  { id: 55, titulo: 'Testar filtros de pesquisa', status: 'Em atraso', descricao: 'Validar o funcionamento dos filtros disponíveis.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 8, responsavel: 'Camila Ferreira' },

  // Rafael Gomes - 2 tarefas
  { id: 56, titulo: 'Corrigir erros de navegação', status: 'Fechado', descricao: 'Corrigir problemas encontrados na navegação entre telas.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-03', responsavelId: 9, responsavel: 'Rafael Gomes' },
  { id: 57, titulo: 'Revisar rotas da aplicação', status: 'Aberto', descricao: 'Verificar parâmetros e comportamento das rotas.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 9, responsavel: 'Rafael Gomes' },

  // Beatriz Martins - 9 tarefas
  { id: 58, titulo: 'Criar documentação técnica', status: 'Fechado', descricao: 'Documentar arquitetura e estrutura do projeto.', dataAbertura: '2026-10-01', dataFechamento: '2026-10-04', responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 59, titulo: 'Revisar documentação da API', status: 'Aberto', descricao: 'Atualizar documentação dos endpoints disponíveis.', dataAbertura: '2026-10-05', dataFechamento: null, responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 60, titulo: 'Criar manual do usuário', status: 'Em atraso', descricao: 'Descrever as principais funcionalidades do sistema.', dataAbertura: '2026-10-08', dataFechamento: null, responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 61, titulo: 'Documentar instalação', status: 'Fechado', descricao: 'Criar instruções para instalação e configuração.', dataAbertura: '2026-10-02', dataFechamento: '2026-10-06', responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 62, titulo: 'Revisar padrões de código', status: 'Aberto', descricao: 'Verificar padronização e organização do código.', dataAbertura: '2026-10-10', dataFechamento: null, responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 63, titulo: 'Criar guia de contribuição', status: 'Em atraso', descricao: 'Documentar regras para colaboração no projeto.', dataAbertura: '2026-10-12', dataFechamento: null, responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 64, titulo: 'Atualizar README', status: 'Fechado', descricao: 'Atualizar informações gerais e instruções do repositório.', dataAbertura: '2026-10-03', dataFechamento: '2026-10-08', responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 65, titulo: 'Revisar histórico de alterações', status: 'Em atraso', descricao: 'Organizar e documentar as principais alterações.', dataAbertura: '2026-10-15', dataFechamento: null, responsavelId: 10, responsavel: 'Beatriz Martins' },
  { id: 66, titulo: 'Preparar entrega do projeto', status: 'Aberto', descricao: 'Conferir arquivos e preparar a versão final.', dataAbertura: '2026-10-18', dataFechamento: null, responsavelId: 10, responsavel: 'Beatriz Martins' }
]);


provide('usuarios',usuarios)
provide('tarefas',tarefas)
</script>

<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>
