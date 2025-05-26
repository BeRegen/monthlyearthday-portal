# Guia de Hospedagem e Domínio Personalizado

Este guia fornece instruções detalhadas sobre como hospedar o portal #MonthlyEarthDay e configurar um domínio personalizado.

## Opções de Hospedagem Recomendadas

### 1. Netlify (Recomendação Principal)

**Vantagens:**
- Plano gratuito generoso (até 100GB de banda/mês)
- Deploy automático a partir do GitHub
- Certificado SSL gratuito
- Fácil configuração de domínio personalizado
- Interface amigável para não-desenvolvedores
- Funções serverless gratuitas (útil para futuras expansões)
- Formulários integrados (perfeito para os formulários de contato e newsletter)

**Passos para Deploy:**
1. Crie uma conta em [netlify.com](https://www.netlify.com/)
2. Clique em "New site from Git"
3. Conecte sua conta GitHub e selecione o repositório
4. Configure as opções de build:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

**Configuração de Domínio Personalizado:**
1. Compre um domínio (sugestões: namecheap.com, porkbun.com, ou Google Domains)
2. No painel do Netlify, vá para "Domain settings"
3. Clique em "Add custom domain" e insira seu domínio
4. Siga as instruções para configurar os registros DNS:
   - Opção 1: Use os servidores de nome do Netlify (mais fácil)
   - Opção 2: Configure registros CNAME/A no seu provedor de domínio

### 2. Vercel (Alternativa Excelente)

**Vantagens:**
- Otimizado para projetos React
- Plano gratuito generoso
- Deploy automático a partir do GitHub
- Certificado SSL gratuito
- Excelente performance global
- Funções serverless incluídas
- Analytics básicos incluídos

**Passos para Deploy:**
1. Crie uma conta em [vercel.com](https://vercel.com/)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. A Vercel detectará automaticamente as configurações do projeto React
5. Clique em "Deploy"

**Configuração de Domínio Personalizado:**
1. No painel do projeto, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Siga as instruções para configurar os registros DNS

### 3. GitHub Pages (Opção Econômica)

**Vantagens:**
- Totalmente gratuito
- Integrado ao GitHub
- Certificado SSL gratuito
- Suporta domínios personalizados

**Limitações:**
- Menos recursos avançados que Netlify/Vercel
- Configuração um pouco mais técnica

**Passos para Deploy:**
1. No arquivo `package.json`, adicione:
   ```json
   "homepage": "https://seuusuario.github.io/monthlyearthday-portal",
   "scripts": {
     "predeploy": "pnpm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
2. Instale o pacote gh-pages: `pnpm add -D gh-pages`
3. Execute `pnpm run deploy`
4. Configure o GitHub Pages nas configurações do repositório

## Recomendações para Domínio Personalizado

### Sugestões de Nomes de Domínio

- **monthlyearthday.org** (ideal para organização sem fins lucrativos)
- **monthlyearthday.com** (opção comercial padrão)
- **monthlyearthday.eco** (extensão específica para projetos ambientais)
- **med-impact.org** (abreviação + foco no impacto)
- **earthdaymonthly.org** (variação do nome)

### Provedores de Domínio Recomendados

1. **Namecheap**
   - Preços competitivos
   - Interface amigável
   - Suporte ao cliente de qualidade
   - WHOIS Guard gratuito (proteção de privacidade)

2. **Porkbun**
   - Preços muito competitivos
   - WHOIS Privacy gratuito
   - Interface moderna e fácil de usar

3. **Google Domains**
   - Preços transparentes
   - Proteção de privacidade incluída
   - Integração com outros serviços Google

### Dicas para Configuração de Domínio

1. **Sempre ative a renovação automática** para evitar a expiração do domínio
2. **Ative a proteção de privacidade WHOIS** para proteger suas informações pessoais
3. **Mantenha o acesso ao email** associado à conta do domínio
4. **Documente as credenciais** de acesso em local seguro
5. **Configure registros MX** se precisar de email personalizado (ex: contato@monthlyearthday.org)

## Custos Estimados

### Hospedagem
- **Netlify/Vercel**: $0/mês (plano gratuito suficiente para início)
- **GitHub Pages**: $0/mês

### Domínio
- **.org**: ~$12-20/ano
- **.com**: ~$10-15/ano
- **.eco**: ~$70-90/ano

### Custos Opcionais
- **Email personalizado**: $5-6/mês (Google Workspace)
- **Planos premium** de hospedagem: $12-19/mês (se precisar de mais recursos)

## Próximos Passos Recomendados

1. **Escolha e registre um domínio** que reflita a identidade do movimento
2. **Configure o deploy no Netlify** (opção mais recomendada)
3. **Conecte seu domínio personalizado** seguindo as instruções do provedor
4. **Configure um email personalizado** para contato profissional (opcional)
5. **Documente todas as credenciais** em local seguro

Com estas configurações, você terá um site profissional, com seu próprio domínio, hospedado em uma plataforma confiável e com deploy automático a cada atualização.
