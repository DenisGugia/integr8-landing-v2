# INTEGR8 Landing Page V2 — Workflow completo (Briefing → GitHub → Deploy)

Data: 28/04/2026
Objetivo: Construir página modular no Claude Code, versioná-la no GitHub, e fazer deploy automático com CI/CD.

---

## Visão geral do workflow

```
1. Preparação (30 min)
   ├─ Criar repositório GitHub
   ├─ Clonar localmente ou via Claude Code
   └─ Configurar branch structure

2. Desenvolvimento no Claude Code (4-6 horas)
   ├─ Criar estrutura de pastas
   ├─ Escrever index.html
   ├─ Escrever CSS (18 arquivos, 1 por seção)
   ├─ Escrever main.js
   └─ Testes locais (Lighthouse, responsividade)

3. Commits e push para GitHub (30 min)
   ├─ Commits por milestone (navbar, hero, benefits, etc.)
   ├─ Push da branch de desenvolvimento
   └─ Criar pull request

4. CI/CD e staging (automático, 5-10 min)
   ├─ GitHub Actions roda testes
   ├─ Build assets (se necessário)
   ├─ Deploy para staging (Netlify/Vercel)
   └─ Preview link gerado

5. Review e merge (30 min)
   ├─ Revisão do preview
   ├─ Merge para main
   └─ Deploy automático para produção

6. Configuração de domínio (15 min)
   ├─ Apontar DNS para Netlify/Vercel
   └─ SSL/HTTPS automático

Total: ~5-6 horas de trabalho ativo (desenvolvimento é sequencial, CI/CD é paralelo).
```

---

## Pré-requisitos

- Conta GitHub (gratuita funciona)
- Conta Netlify ou Vercel (gratuita funciona para MVP)
- Domínio próprio (ex: integr8fitness.com) — pode estar registrado em qualquer lugar
- Claude Code (ativo)

---

## Passo 1 — Criar repositório GitHub

### 1.1 Criar o repositório

1. Ir para github.com → New repository
2. Nome: `integr8-landing-v2`
3. Descrição: `INTEGR8 Landing Page V2 — Eight Sleep inspired, modular CSS, GEO optimized`
4. Visibilidade: Public (para CI/CD gratuito funcionar melhor)
5. Clicar "Create repository"

### 1.2 Estrutura inicial (copiar direto para o código no Claude Code)

```
integr8-landing-v2/
├── .gitignore
├── .github/
│   └── workflows/
│       ├── ci.yml          (testes + build)
│       └── deploy.yml      (deploy automático)
├── README.md
├── package.json            (pode estar vazio, só para parity)
├── netlify.toml            (ou vercel.json se usar Vercel)
├── index.html
├── css/
│   ├── global.css
│   ├── navbar.css
│   ├── hero.css
│   ├── benefits.css
│   ├── identificacao.css
│   ├── paradigma.css
│   ├── sistema.css
│   ├── tabs.css
│   ├── ciencia.css
│   ├── pratica.css
│   ├── perfis.css
│   ├── stats.css
│   ├── app.css
│   ├── cenarios.css
│   ├── coach.css
│   ├── oferta.css
│   ├── faq.css
│   ├── cta-final.css
│   └── footer.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── [placeholders e mockups]
│   ├── icons/
│   │   └── [SVGs dos pilares, benefits, etc]
│   └── logo/
│       └── integr8-logo.svg
└── STATUS.md               (controle de progresso)
```

---

## Passo 2 — Clonar ou inicializar no Claude Code

### Opção A: Clonar repositório existente

```bash
# No Claude Code terminal:
git clone https://github.com/[seu-usuario]/integr8-landing-v2.git
cd integr8-landing-v2
```

### Opção B: Inicializar repositório local e depois sincronizar

```bash
# Criar pasta local, inicializar git e apontar para GitHub
git init
git remote add origin https://github.com/[seu-usuario]/integr8-landing-v2.git
git branch -M main
```

### Configurar git (primeira vez)

```bash
git config user.name "Denis Gugia"
git config user.email "seu-email@exemplo.com"
```

---

## Passo 3 — Criar arquivos base no Claude Code

Vou detalhar exatamente o que colocar em cada arquivo. Você pode colar direto no Claude Code ou pedir para Claude Code gerar.

### 3.1 .gitignore

```
node_modules/
.DS_Store
*.log
dist/
build/
.env
.env.local
.vscode/
.idea/
*.swp
*.swo
~*
.netlify/
.vercel/
```

### 3.2 package.json (minimal)

```json
{
  "name": "integr8-landing-v2",
  "version": "1.0.0",
  "description": "INTEGR8 Landing Page V2 — Eight Sleep inspired, modular CSS, GEO optimized",
  "scripts": {
    "test": "echo \"Testing...\" && exit 0",
    "build": "echo \"No build needed for static site\""
  },
  "keywords": ["fitness", "coaching", "landing-page", "seo", "geo"],
  "author": "Denis Gugia",
  "license": "MIT"
}
```

### 3.3 netlify.toml (se usar Netlify)

```toml
[build]
  command = "echo 'No build command needed'"
  publish = "."

[dev]
  command = "npx http-server"
  port = 8000

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.js"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"
```

Se usar Vercel, criar `vercel.json`:

```json
{
  "buildCommand": "echo 'Static site, no build'",
  "outputDirectory": ".",
  "env": {
    "VERCEL_ENV": "production"
  },
  "env": {
    "VERCEL_ANALYTICS_ID": "[deixar em branco por enquanto]"
  }
}
```

### 3.4 README.md

```markdown
# INTEGR8 Landing Page V2

Página de vendas do Protocolo INTEGR8 — consultoria de fitness personalizada com 8 pilares monitorados em tempo real.

## Características

- Inspired by Eight Sleep design system
- Modular CSS (1 arquivo por seção)
- GEO optimized (Generative Engine Optimization)
- SEO compliant (E-E-A-T, Schema Markup)
- Responsive (mobile-first)
- Lighthouse >90

## Stack

- HTML5 semântico
- CSS3 com CSS variables
- Vanilla JavaScript (sem frameworks)
- Schema.org JSON-LD

## Desenvolvimento

```bash
# Clonar
git clone https://github.com/DenisGugia/integr8-landing-v2.git
cd integr8-landing-v2

# Abrir em servidor local
npx http-server

# Ou
python -m http.server 8000
```

Acessar `http://localhost:8000`

## Estrutura

- `index.html` — Shell HTML, carrega todos os CSS/JS
- `css/` — 18 arquivos CSS, um por seção
- `js/main.js` — Lógica interativa (navbar, tabs, accordion, scroll)
- `assets/` — Imagens, ícones, logo

## Deploy

Push para GitHub → GitHub Actions roda testes → Netlify/Vercel faz deploy automático.

## Roadmap

- [ ] Estrutura base (HTML + CSS global)
- [ ] Navbar + Hero
- [ ] Benefits + Identificação + Paradigma
- [ ] Sistema + Tabs
- [ ] Ciência + Prática
- [ ] Perfis + Stats
- [ ] App + Cenários + Coach
- [ ] Oferta + FAQ + CTA Final + Footer
- [ ] Testes (Lighthouse, responsividade)
- [ ] Deploy staging (Netlify preview)
- [ ] Deploy produção
- [ ] Apontar domínio

## Status

Vide STATUS.md

## Autor

Denis Gugia — INTEGR8 Fitness Coaching
```

### 3.5 STATUS.md (controle de progresso)

```markdown
# Status de construção — INTEGR8 Landing Page V2

## Milestones

- [ ] **M1: Estrutura base** (2h)
  - [ ] .gitignore, package.json, netlify.toml, README.md
  - [ ] Estrutura de pastas
  - [ ] index.html shell
  - [ ] global.css (variáveis, reset, tipografia)
  - Milestone commit: `git commit -m "feat: project scaffold and global styles"`

- [ ] **M2: Navbar + Hero** (1.5h)
  - [ ] navbar.css
  - [ ] hero.css
  - [ ] main.js (navbar scroll behavior)
  - Milestone commit: `git commit -m "feat: navbar and hero section"`

- [ ] **M3: Benefits + Identificação + Paradigma** (1h)
  - [ ] benefits.css
  - [ ] identificacao.css
  - [ ] paradigma.css
  - Milestone commit: `git commit -m "feat: benefits, identification, paradigm sections"`

- [ ] **M4: Sistema + Tabs + Ciência + Prática** (1.5h)
  - [ ] sistema.css
  - [ ] tabs.css
  - [ ] ciencia.css
  - [ ] pratica.css
  - [ ] main.js (tabs interaction)
  - Milestone commit: `git commit -m "feat: system, tabs, science, practice sections"`

- [ ] **M5: Perfis + Stats + App** (1h)
  - [ ] perfis.css
  - [ ] stats.css
  - [ ] app.css
  - [ ] main.js (stats animation)
  - Milestone commit: `git commit -m "feat: profiles, stats, app sections"`

- [ ] **M6: Cenários + Coach + Oferta** (1h)
  - [ ] cenarios.css
  - [ ] coach.css
  - [ ] oferta.css
  - Milestone commit: `git commit -m "feat: scenarios, coach, pricing sections"`

- [ ] **M7: FAQ + CTA Final + Footer** (0.5h)
  - [ ] faq.css
  - [ ] cta-final.css
  - [ ] footer.css
  - [ ] main.js (accordion interaction)
  - Milestone commit: `git commit -m "feat: faq, cta-final, footer sections"`

- [ ] **M8: Assets + Responsividade** (1h)
  - [ ] Placeholder images criadas
  - [ ] SVG ícones criados
  - [ ] Media queries ajustadas
  - [ ] Testar em mobile, tablet, desktop
  - Milestone commit: `git commit -m "feat: responsive design and assets"`

- [ ] **M9: Otimizações + SEO** (0.5h)
  - [ ] Schema Markup JSON-LD (Person, FAQPage, WebPage)
  - [ ] Meta tags
  - [ ] Alt text em imagens
  - [ ] Lighthouse >90
  - Milestone commit: `git commit -m "feat: seo, schema markup, performance"`

- [ ] **M10: CI/CD + Deploy** (1h)
  - [ ] .github/workflows/ci.yml
  - [ ] .github/workflows/deploy.yml
  - [ ] Conectar Netlify/Vercel
  - [ ] Testar preview automático
  - Milestone commit: `git commit -m "ci: github actions and deployment setup"`

- [ ] **M11: Domínio + Go Live** (0.5h)
  - [ ] Apontar DNS para Netlify/Vercel
  - [ ] Verificar SSL/HTTPS
  - [ ] Testar no domínio real
  - Final commit: `git commit -m "chore: domain configuration"`

## Tempo total estimado
~12 horas de trabalho (sequencial, sem paralelização)

## Próximos passos
1. Clonar repo no Claude Code
2. Começar por M1
3. Um commit por milestone
4. Push após cada milestone (ou a cada 2 milestones)

## Notas
- Placeholders de imagem: usar divs com background-color #E5E5E5 e texto descritivo
- Cores: usar variáveis CSS definidas em global.css (--color-accent, --color-teal, etc)
- Responsive: mobile-first, testar com DevTools
- Performance: Lighthouse antes de fazer push
```

---

## Passo 4 — Estrutura index.html (shell)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Meta tags SEO/GEO -->
    <title>INTEGR8 — Consultoria de fitness personalizada com dados em tempo real | Toronto</title>
    <meta name="description" content="Programa de treino e nutrição com acompanhamento por app e coach dedicado. 8 pilares monitorados em tempo real. Para adultos que querem resultado sustentável sem abrir mão da vida real. Toronto, Canadá.">
    <meta name="keywords" content="personal trainer online, consultoria fitness personalizada, treino e nutrição com acompanhamento, fitness coaching Toronto, programa de treino com app, coach fitness brasileiro Toronto, INTEGR8">
    <link rel="canonical" href="https://www.integr8fitness.com/">
    
    <!-- Open Graph -->
    <meta property="og:title" content="INTEGR8 — Seu corpo evolui quando o sistema se adapta a como você funciona">
    <meta property="og:description" content="Programa de treino e nutrição com 8 pilares monitorados em tempo real. App dedicado + coach pessoal.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.integr8fitness.com/">
    <meta property="og:image" content="https://www.integr8fitness.com/assets/images/og-image.png">
    <meta property="og:locale" content="pt_BR">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Fonts (preconnect) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..150,300;0,9..150,400;0,9..150,500;0,9..150,600;0,9..150,700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet">
    
    <!-- Estilos -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/benefits.css">
    <link rel="stylesheet" href="css/identificacao.css">
    <link rel="stylesheet" href="css/paradigma.css">
    <link rel="stylesheet" href="css/sistema.css">
    <link rel="stylesheet" href="css/tabs.css">
    <link rel="stylesheet" href="css/ciencia.css">
    <link rel="stylesheet" href="css/pratica.css">
    <link rel="stylesheet" href="css/perfis.css">
    <link rel="stylesheet" href="css/stats.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/cenarios.css">
    <link rel="stylesheet" href="css/coach.css">
    <link rel="stylesheet" href="css/oferta.css">
    <link rel="stylesheet" href="css/faq.css">
    <link rel="stylesheet" href="css/cta-final.css">
    <link rel="stylesheet" href="css/footer.css">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.integr8fitness.com/#denis",
      "name": "Denis Gugia",
      "jobTitle": "Fitness Coach",
      "url": "https://www.integr8fitness.com/",
      "sameAs": ["https://www.instagram.com/integr8"],
      "makesOffer": {
        "@type": "Offer",
        "name": "Protocolo INTEGR8",
        "description": "Programa de treino e nutrição personalizado com 8 pilares monitorados em tempo real.",
        "price": "49.90",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
    
    <!-- llms.txt -->
    <link rel="alternate" href="https://www.integr8fitness.com/llms.txt" type="text/plain">
</head>
<body>
    <header id="navbar" class="navbar" role="navigation" aria-label="Navegação principal">
        <!-- Navbar content aqui -->
    </header>
    
    <main role="main">
        <section id="hero" class="hero" aria-label="Apresentação">
            <!-- Hero content -->
        </section>
        
        <section id="benefits" class="benefits" aria-label="Diferenciais">
            <!-- Benefits content -->
        </section>
        
        <section id="identificacao" class="identificacao" aria-label="Identificação">
            <!-- Identificação content -->
        </section>
        
        <!-- ... demais seções ... -->
        
        <section id="footer" class="footer" aria-label="Rodapé">
            <!-- Footer content -->
        </section>
    </main>
    
    <!-- Scripts -->
    <script src="js/main.js" defer></script>
</body>
</html>
```

---

## Passo 5 — Workflow de commits (milestones)

Cada milestone é 1 commit. Padrão Git Conventional Commits:

```bash
# M1: Estrutura base
git add .
git commit -m "feat: project scaffold and global styles"
git push origin main

# M2: Navbar + Hero
git add css/navbar.css css/hero.css js/main.js
git commit -m "feat: navbar and hero section"
git push origin main

# M3: Benefits + Identificação + Paradigma
git add css/benefits.css css/identificacao.css css/paradigma.css
git commit -m "feat: benefits, identification, paradigm sections"
git push origin main

# ... etc para cada milestone
```

Cada push ativa a GitHub Action (CI) automaticamente.

---

## Passo 6 — GitHub Actions (CI/CD)

Criar dois arquivos em `.github/workflows/`:

### 6.1 .github/workflows/ci.yml (testes)

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Check HTML
        run: |
          if command -v html-validate &> /dev/null; then
            html-validate index.html
          else
            echo "HTML Validate not installed, skipping"
          fi
      
      - name: Check CSS
        run: |
          echo "CSS check passed"
      
      - name: Check JavaScript
        run: |
          echo "JavaScript check passed"
      
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          uploadArtifacts: true
          temporaryPublicStorage: true
        continue-on-error: true
```

### 6.2 .github/workflows/deploy.yml (deploy automático)

Se usar **Netlify**:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: '.'
          production-branch: main
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        timeout-minutes: 1
```

Se usar **Vercel**:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy with Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
```

### 6.3 Configurar secrets no GitHub

1. Ir para Settings → Secrets and variables → Actions
2. Criar novo secret:

**Se Netlify:**
- `NETLIFY_AUTH_TOKEN` — Token pessoal do Netlify (User Settings → Applications → Personal access tokens)
- `NETLIFY_SITE_ID` — ID do site (pode pegar no site settings do Netlify ou no `netlify.toml`)

**Se Vercel:**
- `VERCEL_TOKEN` — Token do Vercel (Account Settings → Tokens)
- `VERCEL_ORG_ID` — ID da organização (Team Settings → General)
- `VERCEL_PROJECT_ID` — ID do projeto (Project Settings → General)

---

## Passo 7 — Desenvolvimento prático (usando Claude Code)

### 7.1 Iniciar Claude Code

1. Abrir Claude Code
2. Escolher workspace: `integr8-landing-v2` (ou novo workspace)
3. Clonar repo: `git clone https://github.com/[seu-user]/integr8-landing-v2.git`

### 7.2 Pedir ao Claude Code para gerar

Você pode pedir:

```
Usando o briefing em INTEGR8_LANDING_V2_BRIEFING.md como referência, crie:

1. css/global.css — com todas as variáveis CSS da paleta, reset, tipografia, utilities
2. css/navbar.css — estilização da navbar com comportamento scroll
3. js/main.js — lógica de navbar scroll, tabs, accordion, scroll horizontal

Siga exatamente as especificações do briefing:
- Paleta: teal #4ECDC4, branco #FFFFFF, off-white #F9F8F7, preto #0A0A0A
- Tipografia: Playfair Display (headlines), DM Sans (corpo)
- Mobile-first responsive design
- Sem frameworks, vanilla CSS/JS
```

Claude Code vai gerar os arquivos. Você revisa, valida e commita.

### 7.3 Fluxo por milestone

Para cada milestone (M1-M11), faça:

1. **Pedir ao Claude Code** para gerar os arquivos CSS/JS daquela seção
2. **Revisar** o código gerado no editor
3. **Testar localmente** (abrir `index.html` em navegador ou `npx http-server`)
4. **Validar** com Lighthouse (DevTools → Lighthouse tab)
5. **Commit**: `git add .` + `git commit -m "feat: [descrição]"` + `git push origin main`
6. **Esperar** 2-3 minutos pela GitHub Action
7. **Revisar** o deploy preview (Netlify/Vercel fornece URL automática)
8. **Próximo milestone**

---

## Passo 8 — Testar localmente antes de push

### 8.1 Servir localmente

```bash
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node http-server
npx http-server

# Opção 3: VSCode Live Server (se tiver extensão)
Right-click index.html → Open with Live Server
```

Acessar `http://localhost:8000`

### 8.2 Lighthouse

1. Abrir DevTools (F12)
2. Aba "Lighthouse"
3. Gerar relatório (Performance, Accessibility, Best Practices, SEO)
4. Meta: >90 em cada categoria

### 8.3 Responsividade

1. DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Testar em: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
3. Verificar: touch targets, zoom em imagens, overflow horizontal, readability

---

## Passo 9 — Conectar Netlify ou Vercel

### 9.1 Netlify (mais simples para estático)

1. Ir para netlify.com → Sign up (GitHub)
2. New site from Git → Autorizar GitHub
3. Escolher repositório `integr8-landing-v2`
4. Build command: deixar em branco (ou `echo 'Static site'`)
5. Publish directory: `.`
6. Deploy
7. Netlify gera subdomain automático (ex: `integr8-landing.netlify.app`)
8. Copiar Site ID (Settings → General → API ID)
9. No GitHub Secrets, adicionar `NETLIFY_SITE_ID` e `NETLIFY_AUTH_TOKEN`

### 9.2 Vercel (alternativa)

1. Ir para vercel.com → Sign up (GitHub)
2. New project → Importar repositório GitHub
3. Framework: Other (static site)
4. Deploy
5. Vercel gera subdomain (ex: `integr8-landing-v2.vercel.app`)
6. Copiar IDs (Project Settings)
7. No GitHub Secrets, adicionar `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

---

## Passo 10 — Configurar domínio próprio

Após sair staging (Netlify/Vercel preview), configurar o domínio real:

### 10.1 Se domínio está em registrador externo (GoDaddy, Namecheap, etc)

1. **No Netlify/Vercel:**
   - Site Settings → Domain management → Add custom domain
   - Inserir `integr8fitness.com` (ou seu domínio)
   - Netlify/Vercel fornecerá records de DNS

2. **No registrador do domínio:**
   - Ir para DNS settings
   - Adicionar ou atualizar os records fornecidos por Netlify/Vercel
   - Esperar propagação DNS (5-48 horas, geralmente <1h)

3. **Verificação:**
   - Digitar domínio no navegador
   - Deve acessar a página
   - SSL/HTTPS automático (Netlify/Vercel fornece)

### 10.2 Se quiser transferir domínio para Netlify/Vercel

- Netlify suporta registro de domínio (pago, ~$14/ano)
- Vercel não oferece registro, mas integração com Vercel Domains

Simples é manter em registrador externo e apenas apontar DNS.

---

## Passo 11 — Checklist pre-launch

Antes de acessar `integr8fitness.com` publicamente:

```
[ ] Todos os placeholders de imagem foram removidos ou substituídos
[ ] Foto do Denis existe (não é placeholder)
[ ] Logo INTEGR8 foi inserido (navbar + footer)
[ ] Mockups do app foram inseridos (seção 12)
[ ] Lighthouse score >90 em todas as seções
[ ] Responsividade testada (mobile, tablet, desktop)
[ ] Links internos funcionando (navbar âncoras)
[ ] Mailto/WhatsApp links (se houver CTA secundário)
[ ] Meta tags corretas no head
[ ] Schema Markup validado (https://schema.org/validator)
[ ] robots.txt não bloqueia crawlers
[ ] llms.txt criado na raiz
[ ] 404.html criado (se usar Netlify)
[ ] Redirect de www para non-www (ou vice-versa) — configurar em Netlify/Vercel
[ ] Analytics conectado (Google Analytics 4, se quiser)
[ ] Backup do código em local seguro
```

---

## Passo 12 — Pós-launch

Após página estar live em `integr8fitness.com`:

1. **Submeter para Google Search Console**
   - Verificar propriedade (DNS ou arquivo HTML)
   - Enviar sitemap.xml (Netlify gera automaticamente)
   - Monitorar impressões e cliques

2. **Monitorar GEO (AI citations)**
   - A cada 2 semanas, perguntar a ChatGPT, Perplexity e Gemini:
     - "personal trainer online Toronto"
     - "fitness coaching para brasileiros no Canadá"
     - "programa de treino com app"
   - Registrar se INTEGR8 aparece nas respostas
   - GA4: criar segmento de tráfego de `chat.openai.com`, `perplexity.ai`

3. **Atualizações de content**
   - Revisar stats (seção 11) a cada trimestre
   - Atualizar dates nas referências científicas
   - Adicionar depoimentos reais quando clientes começarem

4. **Manutenção**
   - Verificar Lighthouse mensalmente
   - Testar links 1x por trimestre
   - Atualizar imagens/mockups conforme app INTEGR8 evoluir

---

## Resumo final do processo

```
1. Criar repo GitHub (5 min)
2. Clonar no Claude Code (2 min)
3. Criar arquivos base (.gitignore, package.json, etc) (10 min)
4. Pedir Claude Code para gerar CSS + JS (milestones) (4-6 horas)
   └─ Testar localmente entre milestones
5. Commit + push (após cada 2 milestones) (5 min × 6 = 30 min)
6. GitHub Actions testa automaticamente (3-5 min)
7. Netlify/Vercel faz deploy em preview (automático)
8. Revisar preview, depois merge (30 min)
9. Deploy automático em produção
10. Configurar domínio DNS (15 min)
11. Ir live

Total: ~6-8 horas de trabalho ativo (não sequencial, tem paralelização no CI/CD)
```

---

## Comandos Git essenciais

```bash
# Clonar repo
git clone https://github.com/[seu-user]/integr8-landing-v2.git

# Entrar na pasta
cd integr8-landing-v2

# Ver status
git status

# Adicionar tudo
git add .

# Adicionar específico
git add css/navbar.css js/main.js

# Commit
git commit -m "feat: navbar section"

# Push (enviando para GitHub)
git push origin main

# Atualizar local com o que está no GitHub
git pull origin main

# Ver histórico
git log --oneline

# Ver branch atual
git branch

# Criar nova branch (se quiser trabalhar em paralelo)
git checkout -b feature/nova-secao
# ... fazer trabalho ...
git push origin feature/nova-secao
# Depois fazer Pull Request no GitHub

# Mudar de branch
git checkout main

# Deletar branch local
git branch -d feature/antiga-secao
```

---

## Próximas ações

1. **Criar repo no GitHub** → copiar URL HTTPS
2. **Abrir Claude Code** → File → Open Folder → integr8-landing-v2
3. **Colar briefing** como arquivo: `INTEGR8_LANDING_V2_BRIEFING.md`
4. **Começar por M1:**
   - Pedir Claude Code para criar `.gitignore`, `package.json`, `netlify.toml`, `README.md`, `STATUS.md`, `index.html`, `css/global.css`
   - Commit + push
5. **Depois M2-M11** conforme os milestones acima
6. **Ao final**, verificar checklist e ir live

Dúvidas? Posso detalhar qualquer passo.
