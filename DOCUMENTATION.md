# Documentação do Portal #MonthlyEarthDay

## Visão Geral

Este documento fornece instruções detalhadas sobre como gerenciar e atualizar o portal #MonthlyEarthDay. O site foi desenvolvido com React e inclui diversas funcionalidades para facilitar a administração e o engajamento dos usuários.

## Índice

1. [Gerenciamento do Blog](#gerenciamento-do-blog)
2. [Sistema de Newsletter](#sistema-de-newsletter)
3. [Sistema de Comentários](#sistema-de-comentários)
4. [Compartilhamento Social](#compartilhamento-social)
5. [Atualização de Conteúdo](#atualização-de-conteúdo)
6. [Hospedagem e Domínio](#hospedagem-e-domínio)

## Gerenciamento do Blog

O portal inclui um sistema de blog completo que permite criar, editar e excluir posts facilmente.

### Criação de Posts

1. Navegue até a página "Blog" do site
2. Clique no botão "Create New Post" no topo da página
3. Preencha os campos do formulário:
   - **Title**: Título do post
   - **Excerpt**: Resumo curto que aparecerá nos cards
   - **Content**: Conteúdo principal do post (suporta formatação Markdown)
   - **Author**: Nome do autor
   - **Image URL**: Link para uma imagem destacada (opcional)
   - **Category**: Selecione uma categoria para o post
   - **Tags**: Adicione tags separadas por vírgula
4. Clique em "Create Post" para publicar

### Edição de Posts

1. Na página "Blog", localize o post que deseja editar
2. Clique no ícone de lápis (✏️) no canto superior esquerdo do card
3. Faça as alterações necessárias no formulário
4. Clique em "Update Post" para salvar as mudanças

### Exclusão de Posts

1. Na página "Blog", localize o post que deseja excluir
2. Clique no ícone de lixeira (🗑️) no canto superior esquerdo do card
3. Confirme a exclusão na caixa de diálogo

### Formatação de Conteúdo

O editor de posts suporta formatação básica em Markdown:

- `# Título`: Cria um título principal
- `## Subtítulo`: Cria um subtítulo
- `### Título menor`: Cria um título terciário
- `- Item`: Cria um item de lista
- Parágrafos são separados por linhas em branco

## Sistema de Newsletter

O portal inclui um sistema de newsletter para coletar emails de inscritos.

### Gerenciamento de Inscritos

1. Na seção de newsletter (geralmente no rodapé ou na página inicial), clique no link discreto "Admin options"
2. Serão exibidas opções para exportar a lista de inscritos:
   - **Download CSV**: Baixa um arquivo CSV com todos os emails
   - **Export to Google Sheets**: Abre o Google Sheets com os dados pré-preenchidos
   - **Send via Email**: Abre seu cliente de email com a lista de inscritos

### Personalização da Newsletter

Para personalizar o texto e aparência da newsletter:

1. Abra o arquivo `/src/components/Newsletter.tsx`
2. Modifique os valores padrão para `title` e `description`
3. Salve o arquivo e republique o site

## Sistema de Comentários

O portal inclui um sistema de comentários para os posts do blog.

### Moderação de Comentários

1. Navegue até um post específico do blog
2. Role até a seção de comentários
3. Para excluir um comentário, clique no "×" no canto superior direito do comentário
4. Confirme a exclusão na caixa de diálogo

### Personalização do Sistema de Comentários

Para personalizar o sistema de comentários:

1. Abra o arquivo `/src/components/CommentSection.tsx`
2. Modifique os textos, campos ou estilos conforme necessário
3. Salve o arquivo e republique o site

## Compartilhamento Social

O portal inclui botões de compartilhamento social para facilitar a divulgação do conteúdo.

### Locais de Compartilhamento

Os botões de compartilhamento estão disponíveis em:
- Topo e rodapé de cada post do blog
- Podem ser adicionados a outras páginas conforme necessário

### Personalização dos Botões de Compartilhamento

Para personalizar os botões de compartilhamento:

1. Abra o arquivo `/src/components/ShareButtons.tsx`
2. Modifique as redes sociais disponíveis, hashtags padrão ou estilos
3. Salve o arquivo e republique o site

## Atualização de Conteúdo

### Métricas de Impacto

Para atualizar as métricas de impacto exibidas na página inicial:

1. Abra o arquivo `/src/pages/Home.tsx`
2. Localize o objeto `impactData`
3. Atualize os valores para `trees`, `waste` e `participants`
4. Salve o arquivo e republique o site

### Depoimentos

Para atualizar os depoimentos exibidos na página inicial:

1. Abra o arquivo `/src/pages/Home.tsx`
2. Localize o array `testimonials`
3. Modifique os objetos existentes ou adicione novos
4. Salve o arquivo e republique o site

### Histórico e FAQ

Para atualizar o histórico e FAQ na página "About":

1. Abra o arquivo `/src/pages/About.tsx`
2. Localize os objetos `aboutData`, `timeline` e `faq`
3. Modifique os valores conforme necessário
4. Salve o arquivo e republique o site

## Hospedagem e Domínio

O portal está configurado para ser hospedado no Netlify, que oferece hospedagem gratuita com domínios personalizados.

### Atualização do Site

Para atualizar o site após fazer modificações:

1. Faça as alterações necessárias nos arquivos
2. Execute `pnpm run build` para gerar os arquivos de produção
3. Faça upload da pasta `dist` para o Netlify ou use o deploy automático via GitHub

### Configuração de Domínio Personalizado

Para configurar um domínio personalizado:

1. Acesse o painel do Netlify
2. Vá para a seção "Domain settings"
3. Clique em "Add custom domain"
4. Siga as instruções para configurar os registros DNS

---

Para qualquer dúvida adicional ou suporte técnico, entre em contato com a equipe de desenvolvimento.
