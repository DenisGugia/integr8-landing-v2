# INTEGR8 Landing Page V2 — Guia Maestro Completo
## Sequência de comandos + Skills + Modelos progredidos + IDE portabilidade

Versão: 1.0  
Data: 28/04/2026  
Objetivo: Construir página profissional com zero retrabalho, usando modelo certo em cada etapa, pronto para rodar em qualquer IDE.

---

## Parte 0 — Estrutura de comandos e ferramentas

### IDEs disponíveis e quando usar

| IDE | Uso | Limite tokens | Quando usar |
|-----|-----|---|---|
| **Claude.ai (web)** | Planejamento, briefing, specs | ~100k | Início, decisões, specs |
| **Claude Code** | Desenvolvimento, geração de código | ~200k | Desenvolvimento iterativo |
| **VS Code + Claude API** | Desenvolvimento local, paralelo | Ilimitado (pago) | Trabalho séries, múltiplas abas |
| **Antigravity** | Edição visual, componentes | ~150k | Ajustes visuais, debugging |
| **Codex/OpenAI API** | Fallback complementar | Ilimitado (pago) | Se Claude tokens esgotarem |

### Modelos por etapa (mais poderosos = menos tokens)

| Etapa | Modelo | Por quê |
|-------|--------|--------|
| **Setup + Scaffolding** | Claude 3.5 Haiku | Rápido, barato, template repetitivo |
| **CSS seções** | Claude 3.5 Sonnet | Balanceado, CSS visual requer contexto |
| **JS interativo** | Claude 3.5 Opus | Complexo, precisa lógica perfeita |
| **SEO/Schema** | Claude 3.5 Sonnet | Estruturado, sem ambiguidade |
| **Review final** | Claude 3.5 Opus | Validação cruzada, qualidade |

### Estratégia de tokens

```
Total disponível por IDE:
- Claude.ai web: ~100k por conversa
- Claude Code: ~200k por sessão  
- VS Code API: Ilimitado (pago)

Estratégia:
1. Use Haiku para setup (gasta ~5-10k)
2. Use Sonnet para CSS (gasta ~20-30k por arquivo)
3. Use Opus para JS/final review (gasta ~15-20k)
4. Se exceder em uma IDE, continue em outra com contexto exportado

Total esperado: ~80-120k tokens (1 IDE aguenta tudo)
```

---

## Parte 1 — Preparação inicial (Haiku em Claude.ai)

### Comando 1.1 — Criar structure setup script

**Onde:** Claude.ai web
**Modelo:** Claude 3.5 Haiku
**Tempo:** ~10 min

```
Skill a usar: sdd-spec

Prompt para Claude:
---
Crie uma specification para um setup script que vai:

1. Criar estrutura de pastas para integr8-landing-v2
2. Gerar arquivos base: .gitignore, package.json, netlify.toml, README.md, STATUS.md
3. Criar index.html shell com todos os links de CSS/JS
4. Criar 18 arquivos CSS vazios (1 por seção)
5. Criar main.js vazio
6. Inicializar git

Output deve ser um script bash executável que eu possa rodar numa IDE.
Requer zero inputs manuais (tudo automatizado).

Referência: INTEGR8_LANDING_V2_BRIEFING.md (será fornecido após)

Formato: SDD-SPEC JSON (veja skill sdd-spec)
---

Claude responde com SPEC completa.
```

**Próximo passo:** Levar spec para Claude Code ou VS Code

---

## Parte 2 — Setup executado (Claude Code + Haiku)

### Comando 2.1 — Gerar setup.sh

**Onde:** Claude Code ou VS Code terminal
**Modelo:** Claude 3.5 Haiku
**Tempo:** ~5 min

```bash
# No terminal da IDE:

# Se usar Claude Code:
# 1. File → New file → setup.sh
# 2. Cole o prompt abaixo

# Se usar VS Code:
# 1. Terminal → New Terminal
# 2. cat > setup.sh << 'EOF'
# 3. Cole o script
# 4. EOF

# Prompt para gerar setup.sh:
---
Use a SPEC que você criou antes e gera um bash script setup.sh que:

1. Cria pasta integr8-landing-v2 e entra
2. Cria subpastas: css/, js/, assets/images, assets/icons, assets/logo, .github/workflows
3. Cria .gitignore com conteúdo padrão
4. Cria package.json minimal
5. Cria netlify.toml
6. Cria README.md
7. Cria STATUS.md
8. Cria index.html com shell correto
9. Cria 18 arquivos CSS vazios (1 por seção do briefing)
10. Cria main.js vazio
11. Inicia git: git init, git config, git remote add origin [URL]

Script deve ser idempotent (pode rodar 2x sem erro).
Script deve printar status de cada criação.

Output: Bash script completo, pronto para copiar/colar e rodar.
---

Claude gera script (~100 linhas).
```

### Comando 2.2 — Executar setup.sh

```bash
# Terminal da IDE:
chmod +x setup.sh
./setup.sh

# Ou se estiver em VS Code Windows (PowerShell):
bash setup.sh
```

**Validar:**
```bash
ls -la integr8-landing-v2/
cd integr8-landing-v2
git status
```

---

## Parte 3 — Briefing dentro do projeto

### Comando 3.1 — Copiar briefing para projeto

```bash
# Terminal (em qualquer IDE):
cp ~/INTEGR8_LANDING_V2_BRIEFING.md integr8-landing-v2/
cp ~/INTEGR8_WORKFLOW_DEPLOY.md integr8-landing-v2/

# Validar:
cd integr8-landing-v2
ls -la *.md
```

**Agora briefing está no projeto. Qualquer IDE que abrir esse folder tem acesso.**

---

## Parte 4 — CSS global.css (Sonnet)

### Comando 4.1 — Gerar global.css

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Sonnet
**Tempo:** ~15 min
**Skill:** frontend-design

```
Prompt para Sonnet:
---
Usando INTEGR8_LANDING_V2_BRIEFING.md como referência (secção "Paleta de cores" e "Tipografia"), 
gera css/global.css com:

1. CSS Reset (normalizar browsers)
2. CSS Variables com toda a paleta:
   - Cores: branco, off-white, preto, accent teal, grays
   - Tipografia: Playfair Display, DM Sans
   - Espaçamento: gap, padding, margin padrões
   - Breakpoints: 640px, 768px, 1024px, 1280px
3. Tipografia completa:
   - @font-face ou Google Fonts imports
   - h1, h2, h3, body, caption styles
   - Eyebrow style (pequeno, uppercase, spaced)
4. Utilities:
   - .container (max-width 1440px, padding responsive)
   - .button (pill shape, primary e secondary)
   - .section-spacing
   - .text-truncate, .flex-center, etc
5. Acessibilidade:
   - :focus-visible styles
   - Skip to main link
   - Reduzir motion respeito

Estrutura esperada:
```css
:root {
  /* Colors */
  --color-white: #FFFFFF;
  --color-offwhite: #F9F8F7;
  /* ...etc */
  
  /* Typography */
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'DM Sans', sans-serif;
  /* ...etc */
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  /* ...etc */
}

/* Reset */
* { ... }

/* Typography */
h1 { ... }
h2 { ... }
/* ...etc */

/* Utilities */
.container { ... }
.button { ... }
/* ...etc */

/* Accessibility */
@media (prefers-reduced-motion: reduce) { ... }
```

Output: Arquivo CSS completo, zero warnings de validação.
---

Claude gera arquivo pronto.
```

### Comando 4.2 — Salvar global.css

**Em Claude Code:**
1. Clicar no arquivo gerado → Copy
2. Abrir `css/global.css` → Paste

**Em VS Code:**
```bash
cat > css/global.css << 'EOF'
[colar conteúdo gerado]
EOF
```

### Comando 4.3 — Validar CSS

```bash
# Terminal (verificar syntax basicamente):
head -20 css/global.css
tail -20 css/global.css

# Ou use um validador online depois no navegador
```

---

## Parte 5 — HTML index.html (Sonnet)

### Comando 5.1 — Gerar index.html completo

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Sonnet
**Tempo:** ~20 min
**Skill:** frontend-design

```
Prompt para Sonnet:
---
Usando INTEGR8_LANDING_V2_BRIEFING.md (seções "Meta tags", "Estrutura semântica HTML", "Schema Markup"),
gera index.html COMPLETO COM:

1. DOCTYPE, html lang="pt-BR", charset UTF-8
2. Meta tags SEO/GEO:
   - title, description, keywords
   - canonical, og:*, twitter:*
   - viewport, language
3. Font preconnects (Google Fonts + display=swap)
4. Link tags para todos os 18 CSS (na ordem correta)
5. Schema.org JSON-LD (3 blocos prontos):
   - Person (Denis + makesOffer)
   - FAQPage
   - WebPage + citations
6. Estrutura HTML semântica:
   - <header> navbar
   - <main> com 18 <section> com IDs corretos
   - <footer>
7. Cada seção tem:
   - id="[nome-secao]"
   - aria-label="[descrição]"
   - Estrutura interna conforme briefing (H2, H3, paragraphs, divs)
8. Placeholders para imagens (divs com background-color #E5E5E5, texto descritivo)
9. <script src="js/main.js" defer></script> antes de </body>

Não inclua conteúdo real das seções ainda (só estrutura + placeholders).
Foco: semântica HTML5 + acessibilidade + schema válido.

Validação: Executar em um validador HTML (https://validator.w3.org) sem erros.

Output: Arquivo HTML pronto, 500-600 linhas.
---

Claude gera arquivo.
```

### Comando 5.2 — Salvar index.html

```bash
# Em VS Code:
cat > index.html << 'EOF'
[conteúdo gerado]
EOF

# Validar:
wc -l index.html
head -50 index.html
```

### Comando 5.3 — Testar localmente

```bash
# Terminal:
python -m http.server 8000
# ou
npx http-server

# Abrir navegador: http://localhost:8000
# Verificar:
# - Página carrega sem erro
# - Navbar aparece (vazio, ok)
# - 18 seções aparecem (vazias, ok)
# - DevTools → Elements → verificar estrutura HTML
```

---

## Parte 6 — CSS seções (Sonnet, paralelizável)

### Comando 6.1 — Gerar CSS por seção (exemplo: hero.css)

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Sonnet
**Tempo:** ~10 min por arquivo (paralelizar = 1.5h total)
**Skill:** frontend-design

```
Prompt para Sonnet (para CADA seção):
---
Usando INTEGR8_LANDING_V2_BRIEFING.md (Seção 2 — Hero),
gera css/hero.css com:

1. Estilização do hero:
   - Fullscreen viewport height (100vh)
   - Background: imagem placeholder (div #E5E5E5) ou gradient
   - Layout: flexbox, texto esquerda, imagem direita
   - Cores: use :root variables (--color-*)
   - Tipografia: h1 (Playfair, 48-72px), subheadline (DM Sans, 18px)
   - CTA button: pill shape, preto background, branco texto
   - Padding/spacing: conforme briefing (80px lateral desktop, 24px mobile)

2. Responsive:
   - Desktop (>1024px): layout 2-coluna (texto left, imagem right)
   - Tablet (768-1024px): imagem menor, padding ajustado
   - Mobile (<768px): full-width, stacked (texto em cima, imagem embaixo)

3. Animations (suave):
   - Hero text fade-in ao carregar
   - Button hover: scale 1.02, box-shadow
   - Sem JS, usar CSS animations/transitions

4. Accessibility:
   - Contraste suficiente (WCAG AA)
   - :focus-visible no botão
   - Alt text será no HTML (seu trabalho)

Variáveis CSS esperadas (definidas em global.css):
- --color-white
- --color-offwhite
- --color-accent-teal
- --font-serif (Playfair)
- --font-sans (DM Sans)
- --spacing-sm, --spacing-md, --spacing-lg

Output: CSS arquivo pronto, <200 linhas, zero warnings.
---

Claude gera hero.css.
```

### Comando 6.2 — Repetir para outras seções

**Ordem sugerida (por complexidade crescente):**

1. benefits.css (3 colunas simples)
2. identificacao.css (texto simples)
3. paradigma.css (2 cards)
4. sistema.css (círculo com ícones)
5. tabs.css (mais complexo, tabs + conteúdo dinâmico)
6. ciencia.css (SVG placeholder)
7. pratica.css (2 blocos)
8. perfis.css (grid 3x2)
9. stats.css (4 números grande, fundo escuro)
10. app.css (5 cards)
11. cenarios.css (4 cards lado a lado)
12. coach.css (foto + texto)
13. oferta.css (card centrado)
14. faq.css (accordion - CSS puro ou JS)
15. cta-final.css (fullscreen, texto grande)
16. footer.css (simples)
17. navbar.css (em ultimo, depende de JS)

**Comando 6.3 — Salvar todos os CSS**

```bash
# Pedir Claude para gerar benefícios.css
# Copiar para css/benefits.css

# Pedir Claude para gerar identificacao.css
# Copiar para css/identificacao.css

# ... etc ...

# Validar todos foram criados:
ls -la css/ | wc -l
# Deve dar 18 arquivos + .gitkeep = 19

# Ou simplesmente:
for file in css/*.css; do echo "$file: $(wc -l < "$file") linhas"; done
```

---

## Parte 7 — JavaScript interativo (Opus)

### Comando 7.1 — Gerar main.js completo

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Opus (mais poderoso para lógica complexa)
**Tempo:** ~30 min
**Skill:** frontend-design

```
Prompt para Opus:
---
Usando INTEGR8_LANDING_V2_BRIEFING.md (Seção Notas para desenvolvimento, main.js requirements),
gera js/main.js com:

1. Navbar scroll behavior:
   - Detectar scroll com listener
   - Quando scroll > 50px, adicionar classe .scrolled
   - Classe .scrolled muda navbar background (transparente → branco opaco)
   - Transição suave

2. Tabs (seção 7):
   - 3 tabs: Treino, Nutrição, Monitoramento
   - Click em tab → adiciona classe .active
   - Conteúdo correspondente aparece (display: block)
   - Outros desaparecem (display: none)
   - Efeito: fade-in da imagem (CSS opacity transition)
   - Sem reload de página

3. Accordion (seção 16 — FAQ):
   - 8 perguntas/respostas
   - Click em pergunta → expande resposta (height animation)
   - Click novamente → colapsa
   - Apenas 1 item aberto por vez (fechar anterior)
   - Ícone de seta rotaciona quando aberto

4. Scroll horizontal (seções 10, 12, 13):
   - Cards em container com overflow-x: auto
   - Scroll snap (scroll-snap-type: x)
   - Mantém scroll position ao trocar aba (se houver)

5. Stats animation (seção 11):
   - Quando seção entra em viewport (Intersection Observer)
   - Números animam de 0 até o valor final
   - Efeito: contador que sobe gradualmente (2s)
   - Exemplo: "Até 2.000 kcal/dia" → anima 0 → 2000 com formatação de número

6. Smooth scroll para âncoras:
   - Links com href="#[id]" na navbar
   - Scroll suave ao clicar

7. Acessibilidade:
   - keyboard navigation (Tab, Enter, Setas)
   - aria-expanded para accordion
   - aria-selected para tabs
   - Sem quebra de screen readers

Estrutura esperada:
```javascript
// Navbar scroll
const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Tabs
const tabs = document.querySelectorAll('[role="tab"]');
const tabpanels = document.querySelectorAll('[role="tabpanel"]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remover .active de todos
    tabs.forEach(t => t.classList.remove('active'));
    tabpanels.forEach(p => p.classList.add('hidden'));
    // Adicionar .active ao tab clicado
    tab.classList.add('active');
    // Mostrar panel correspondente
    const panelId = tab.getAttribute('aria-controls');
    document.getElementById(panelId).classList.remove('hidden');
  });
});

// Accordion
const accordionButtons = document.querySelectorAll('[aria-expanded]');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    // Fechar todos
    accordionButtons.forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).classList.add('hidden');
    });
    // Abrir o clicado (se não estava aberto)
    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      document.getElementById(button.getAttribute('aria-controls')).classList.remove('hidden');
    }
  });
});

// Stats animation (Intersection Observer)
const statsSection = document.querySelector('#stats');
if (statsSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = statsSection.querySelectorAll('[data-target]');
        numbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          animateCounter(el, 0, target, 2000); // 2 segundos
        });
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(statsSection);
}

function animateCounter(element, start, end, duration) {
  const increment = (end - start) / (duration / 16); // 60fps
  let current = start;
  const interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end.toLocaleString('pt-BR');
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(current).toLocaleString('pt-BR');
    }
  }, 16);
}
```

Output: main.js completo, ~400-500 linhas, zero erros, testado em DevTools.
---

Claude gera arquivo.
```

### Comando 7.2 — Salvar main.js

```bash
cat > js/main.js << 'EOF'
[conteúdo gerado]
EOF

# Validar:
wc -l js/main.js
# Deve dar ~400-500
```

---

## Parte 8 — Testar página localmente

### Comando 8.1 — Servir localmente

```bash
# Terminal:
cd integr8-landing-v2

# Opção 1:
python -m http.server 8000

# Opção 2:
npx http-server

# Abrir navegador:
# http://localhost:8000
```

### Comando 8.2 — Lighthouse

```bash
# DevTools (F12) → Lighthouse tab
# Gerar relatório em:
#  - Performance
#  - Accessibility
#  - Best Practices
#  - SEO

# Meta: >90 em cada categoria
# Se <90 em algo, anotar o problema e pedir Claude para fix
```

### Comando 8.3 — Responsividade

```bash
# DevTools → Toggle device toolbar (Ctrl+Shift+M)
# Testar:
#  - iPhone 12 (390px)
#  - iPad (768px)
#  - Desktop (1440px)

# Verificar:
#  - Nada overflow horizontal
#  - Texto legível
#  - Botões tocáveis (48px+)
#  - Imagens escaladas
```

---

## Parte 9 — Conteúdo das seções (Sonnet)

### Comando 9.1 — Copiar copy para HTML

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Sonnet
**Tempo:** ~1h (fazer por seção)
**Skill:** Nenhuma (copy já está pronta no briefing)

```
Processo:
1. Abrir INTEGR8_LANDING_V2_BRIEFING.md
2. Copiar copy da seção 2 (Hero)
3. Colar em index.html na seção hero
4. Repetir para seções 3-18

Estrutura no HTML (exemplo hero):
```html
<section id="hero" class="hero" aria-label="Apresentação">
  <div class="hero-content">
    <span class="eyebrow">Método INTEGR8</span>
    <h1>Seu corpo evolui quando o sistema se adapta a como você funciona.</h1>
    <p class="subheadline">Uma metodologia que monitora...</p>
    <a href="#oferta" class="btn btn-primary">Quero começar</a>
  </div>
  <div class="hero-image">
    <!-- Placeholder será preenchido depois com imagem real -->
  </div>
</section>
```

Automatizar com CLI:
```bash
# Se quiser: gerar script Python que popula conteúdo
# Pedir Claude:

Cria script python populate-content.py que:
1. Lê INTEGR8_LANDING_V2_BRIEFING.md
2. Extrai copy de cada seção
3. Insere em index.html nos devidos lugares
4. Output: index.html preenchido

Output: script Python pronto
```

```

### Comando 9.2 — Inserir conteúdo em massa (opcional)

```bash
# Se preferir manual (mais controle):
# Abrir index.html em editor
# Ctrl+F para buscar <!-- Seção X -->
# Colar copy correspondente

# Se preferir automático:
# Pedir Claude para gerar script Python
# Rodar: python populate-content.py
# Resultado: index.html com todo conteúdo
```

---

## Parte 10 — Schema Markup e SEO (Sonnet)

### Comando 10.1 — Gerar Schema JSON-LD completo

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Sonnet
**Tempo:** ~15 min
**Skill:** Nenhuma (template no briefing)

```
Prompt:
---
Usando INTEGR8_LANDING_V2_BRIEFING.md (Seção "Schema Markup"),
gera os 3 blocos JSON-LD completos e validados:

1. Person + Offer (Denis + Protocolo INTEGR8)
2. FAQPage (8 perguntas do briefing)
3. WebPage + citations (com referências científicas)

Cada bloco deve:
- Ser JSON-LD válido
- Passar em https://schema.org/validator
- Ter todas as propriedades recomendadas
- Valores reais (não placeholders)

Output: 3 blocos <script type="application/ld+json"> prontos para copiar no <head>
---

Claude gera.
```

### Comando 10.2 — Inserir Schema no HTML

```html
<!-- No <head> de index.html, adicionar: -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  ...
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  ...
}
</script>
```

### Comando 10.3 — Validar Schema

```bash
# Colar HTML em https://schema.org/validator
# Ou usar npm:
npm install -g schema-validator

# Rodar:
schema-validator index.html

# Resultado: "Valid" ou lista de erros
```

---

## Parte 11 — Arquivos de configuração e GitHub (Haiku)

### Comando 11.1 — Gerar .github/workflows/ci.yml e deploy.yml

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Haiku
**Tempo:** ~10 min

```
Prompt:
---
Gera dois arquivos YAML para .github/workflows:

1. ci.yml:
   - Trigger: push para main/develop
   - Steps: checkout, npm install, lighthouse test
   - Artifact: upload resultados
   
2. deploy.yml:
   - Trigger: push para main
   - Deploy para Netlify (usar secrets NETLIFY_AUTH_TOKEN + NETLIFY_SITE_ID)
   - Alternativa: Deploy para Vercel (VERCEL_TOKEN, etc)

Padrão: GitHub Actions standard, sem custom scripts complexos.

Output: 2 arquivos YAML prontos
---

Claude gera.
```

### Comando 11.2 — Inserir workflows

```bash
mkdir -p .github/workflows
cat > .github/workflows/ci.yml << 'EOF'
[conteúdo ci.yml]
EOF

cat > .github/workflows/deploy.yml << 'EOF'
[conteúdo deploy.yml]
EOF

# Validar:
ls -la .github/workflows/
```

---

## Parte 12 — Criar llms.txt e assets (Sonnet)

### Comando 12.1 — Gerar llms.txt

**Onde:** Claude Code ou VS Code
**Modelo:** Claude 3.5 Sonnet
**Tempo:** ~5 min

```
Prompt:
---
Usa INTEGR8_LANDING_V2_BRIEFING.md (seção "llms.txt") e gera arquivo llms.txt
para raiz do projeto. 

Conteúdo deve descrever:
- Sobre INTEGR8 (1-2 parágrafos)
- Serviço principal (Protocolo, preço, ciclo)
- Público-alvo
- Diferencial
- Contato/links

Output: Arquivo .txt pronto
---

Claude gera.
```

```bash
cat > llms.txt << 'EOF'
[conteúdo gerado]
EOF

# Validar:
cat llms.txt
```

### Comando 12.2 — Criar placeholders de imagem (SVG)

```
Prompt:
---
Gera 20 SVGs para assets/icons e assets/images:

Icons (20 SVGs, traço fino, monocromático teal):
1-8: Ícones dos 8 pilares (Treino, Nutrição, Passos, Hidratação, Peso, Fotos, Medidas, Sono)
9-11: Benefits icons (smartphone, person/data, escudo)
10-14: Seção de perfis (5 ícones representativos)
15-18: Misc (arrows, play button, etc)

Cada SVG:
- Monochrome teal (#4ECDC4) ou cinza (#696765)
- Traço fino (stroke-width 1.5-2)
- Viewbox 100x100 para escalabilidade
- Sem fill, apenas stroke (outline style)

Output: 20 <svg> completos, prontos para copiar em index.html ou usar como arquivo.src
---

Claude gera.
```

---

## Parte 13 — Primeiro commit e push para GitHub

### Comando 13.1 — Configurar git e fazer commit

```bash
cd integr8-landing-v2

# Configurar git (primeira vez)
git config user.name "Denis Gugia"
git config user.email "seu-email@exemplo.com"

# Verificar o que foi criado:
git status

# Adicionar tudo:
git add .

# Commit inicial:
git commit -m "feat: project scaffold, HTML structure, CSS, JS, and content

- Created modular project structure with CSS per section
- Implemented semantic HTML5 with accessibility
- Added vanilla JS for navbar scroll, tabs, accordion, stats animation
- Integrated Schema.org markup for SEO/GEO
- All 18 sections styled and responsive
- Lighthouse >90 on all metrics
- Ready for Netlify/Vercel deployment"

# Push para GitHub:
git remote add origin https://github.com/[seu-user]/integr8-landing-v2.git
git branch -M main
git push -u origin main
```

### Comando 13.2 — Verificar GitHub

```
1. Abrir https://github.com/[seu-user]/integr8-landing-v2
2. Ver arquivos no main branch
3. Ver primeiro commit
4. Verificar actions (CI rodou automaticamente)
```

---

## Parte 14 — Conectar Netlify/Vercel (UI, não CLI)

### Comando 14.1 — Netlify

```
1. Ir para https://netlify.com
2. Sign up com GitHub
3. New site from Git
4. Autorizar GitHub
5. Selecionar integr8-landing-v2
6. Build command: (deixar em branco)
7. Publish directory: . (ponto, raiz)
8. Deploy
9. Netlify gera URL automática (ex: integr8-landing.netlify.app)
10. GitHub Actions auto-deploya toda vez que push
```

Ou via CLI:

```bash
npm install -g netlify-cli
cd integr8-landing-v2
netlify init
# Seguir prompts interativos
netlify deploy --prod
```

### Comando 14.2 — Configurar secrets GitHub para CI/CD

```
1. GitHub → Settings → Secrets and variables → Actions
2. New secret:
   NETLIFY_AUTH_TOKEN: [copiar de Netlify user settings]
   NETLIFY_SITE_ID: [copiar de Netlify site settings]
3. Agora deploy.yml pode usar esses secrets automaticamente
```

---

## Parte 15 — Apontar domínio (DNS)

### Comando 15.1 — Configurar domínio em Netlify

```
1. Netlify dashboard → Site settings → Domain management
2. Add custom domain
3. Inserir integr8fitness.com
4. Netlify fornecerá records DNS
5. Ir para registrador (GoDaddy, Namecheap, etc)
6. Zone settings
7. Adicionar records fornecidos
8. Esperar propagação (1-24h, geralmente <1h)
```

---

## Parte 16 — Portable context para outras IDEs

### Comando 16.1 — Exportar contexto para VS Code

```bash
cd integr8-landing-v2

# Criar arquivo de contexto para próxima IDE:
cat > CONTEXT.md << 'EOF'
# INTEGR8 Landing Page V2 — Continuation Context

## Current status:
- ✅ Projeto iniciado e estrutura criada
- ✅ HTML, CSS (18 arquivos), JS pronto
- ✅ Conteúdo inserido
- ✅ Schema markup adicionado
- ✅ Deployed em Netlify staging

## Next steps:
1. Substituir placeholders de imagem (Hero, Coach, App mockups)
2. Ajustar responsividade se necessário
3. Performance tuning (Lighthouse > 95)
4. Testar em múltiplos browsers
5. Monitorar AI citations (GEO)

## Key files:
- index.html — main shell
- css/ — 18 style files
- js/main.js — interactivity
- INTEGR8_LANDING_V2_BRIEFING.md — design spec

## GitHub:
- Repo: https://github.com/[seu-user]/integr8-landing-v2
- Netlify: https://integr8-landing.netlify.app

## Resources:
- Briefing: INTEGR8_LANDING_V2_BRIEFING.md
- Workflow: INTEGR8_WORKFLOW_DEPLOY.md
EOF

git add CONTEXT.md
git commit -m "docs: add continuation context for IDE switching"
git push origin main
```

### Comando 16.2 — Continuar em VS Code (com limite de tokens)

```
1. Abrir VS Code
2. Terminal → Clone repository (SSH ou HTTPS)
3. Colar URL: https://github.com/[seu-user]/integr8-landing-v2.git
4. Abrir pasta
5. Leitura rápida: CONTEXT.md
6. Próximo task: Substituir imagens placeholder
7. Continuar trabalho normalmente
```

### Comando 16.3 — Se tokens esgotarem em uma IDE

```
# Situação: Você estava no Claude Code, esgotou tokens

# 1. Faça commit do que tinha:
git add .
git commit -m "work in progress: [o que fez]"
git push origin main

# 2. Abra outra IDE (VS Code, Antigravity, Codex)
# 3. Clone/abra o repo
# 4. Passe o contexto:
cat CONTEXT.md
cat INTEGR8_LANDING_V2_BRIEFING.md

# 5. Continue do ponto que parou
# 6. Nova IDE continua naturalmente
```

---

## Resumo: Sequência completa de comandos

```bash
# ===== ETAPA 1: SETUP =====
# IDE: Claude.ai (Haiku)
#  → Cria SDD-SPEC para setup script

# IDE: Claude Code ou VS Code (Haiku)
#  → Gera setup.sh
#  → Roda: chmod +x setup.sh && ./setup.sh

# ===== ETAPA 2: ESTRUTURA BASE =====
# IDE: Claude Code ou VS Code (Sonnet)
#  → Gera global.css
#  → Gera index.html shell

# Testa localmente:
python -m http.server 8000
# Verifica: http://localhost:8000 carrega sem erro

# ===== ETAPA 3: CSS SEÇÕES =====
# IDE: Claude Code ou VS Code (Sonnet, parallelizável)
#  → Gera hero.css, benefits.css, ... (18 arquivos)
#  → Salva em css/

# Testa responsividade:
# DevTools → Toggle device toolbar
# Verifica: 390px, 768px, 1440px sem overflow

# ===== ETAPA 4: JAVASCRIPT =====
# IDE: Claude Code ou VS Code (Opus)
#  → Gera main.js (navbar, tabs, accordion, stats)
#  → Salva em js/

# Testa interatividade:
# Clica em tabs → muda conteúdo
# Scroll → navbar muda
# FAQ → accordion abre/fecha
# Stats → números animam

# ===== ETAPA 5: CONTEÚDO + SEO =====
# IDE: Claude Code ou VS Code (Sonnet ou Python script)
#  → Popula content em index.html
#  → Gera Schema JSON-LD
#  → Cria llms.txt
#  → Gera SVG icons

# Testa Lighthouse:
# DevTools → Lighthouse → Gerar relatório
# Meta: >90 em Performance, Accessibility, Best Practices, SEO

# ===== ETAPA 6: CI/CD =====
# IDE: Claude Code ou VS Code (Haiku)
#  → Gera .github/workflows/ci.yml
#  → Gera .github/workflows/deploy.yml
#  → Gera llms.txt

# ===== ETAPA 7: GIT + GITHUB =====
git config user.name "Denis Gugia"
git config user.email "seu-email@exemplo.com"
git init
git remote add origin https://github.com/[seu-user]/integr8-landing-v2.git
git add .
git commit -m "feat: initial landing page structure and content"
git push -u origin main

# ===== ETAPA 8: NETLIFY/VERCEL =====
# UI não CLI:
# 1. netlify.com → New site from Git → integr8-landing-v2
# 2. Deploy automático
# 3. URL: https://integr8-landing.netlify.app

# ===== ETAPA 9: DOMÍNIO =====
# 1. Netlify → Domain management → Add custom domain
# 2. integr8fitness.com
# 3. Copiar DNS records
# 4. GoDaddy/Namecheap → Zone settings → Adicionar records
# 5. Esperar propagação (1h)
# 6. Acessar integr8fitness.com (deve funcionar)

# ===== ETAPA 10: SUBSTITUIR ASSETS =====
# IDE: Qualquer uma
# 1. Substituir placeholders com imagens reais
# 2. Testar Lighthouse novamente
# 3. Commit + push
# 4. Netlify deploya automaticamente

# ===== SE TOKENS ESGOTAREM =====
# Em qualquer IDE:
git add .
git commit -m "work in progress: [descrição]"
git push origin main

# Abrir outra IDE:
# git clone https://github.com/[seu-user]/integr8-landing-v2.git
# Continuar de lá

# FIM
```

---

## Checklist de Skills por etapa

| Etapa | Skill | IDE | Modelo |
|-------|-------|-----|--------|
| Setup | sdd-spec | Claude.ai | Haiku |
| HTML/CSS global | frontend-design | Claude Code | Sonnet |
| CSS seções | frontend-design | Claude Code | Sonnet |
| JavaScript | frontend-design | Claude Code | Opus |
| Conteúdo | Nenhuma | Qualquer | Qualquer |
| SEO/Schema | Nenhuma | Qualquer | Sonnet |
| Review final | requesting-code-review (opcional) | Qualquer | Opus |

---

## Porcentagem de conclusão por etapa

```
Setup........................... 2%
HTML structure.................. 5%
CSS global...................... 8%
CSS seções (18)................. 35% (18/18 × 2%)
JavaScript...................... 20%
Content insertion............... 10%
SEO/Schema/llms.txt............ 5%
GitHub + CI/CD setup........... 5%
Deploy em Netlify............... 5%
Domínio......................... 3%
Asset substitution.............. 2%
---
TOTAL.......................... 100%
```

---

## Tempo total esperado

```
Setup........................ 30 min
HTML + global.css............ 45 min
18× CSS seções............... 90 min (10 min cada, parallelizável)
JavaScript................... 45 min
Content + SEO................ 60 min
GitHub + CI/CD............... 30 min
Netlify + deploy............. 15 min
Domínio...................... 15 min
Testes + ajustes............ 30 min
---
TOTAL....................... ~5-6 horas
```

**Com paralelização (múltiplos arquivos CSS simultaneamente): ~3-4 horas**

---

## O que fazer se algo quebrar

| Problema | Solução |
|----------|---------|
| HTML não carrega | Verificar DevTools → Console → erros de syntax |
| CSS não aplica | Verificar ordem de imports no HTML, especificidade CSS |
| JS não funciona | DevTools → Console → runtime errors, usar debugger |
| Lighthouse <90 | Rodar relatório, seguir sugestões (lazy load, minify, etc) |
| Schema inválido | Validar em schema.org/validator, corrigir JSON |
| Git não faz push | Verificar git config, SSH keys, acesso GitHub |
| Netlify não deploya | Verificar GitHub Actions logs, verificar secrets |
| Domínio não aponta | Esperar propagação DNS (24h máximo), usar DNS checker |

---

Agora você tem o roteiro completo com zero ambiguidade. Executar comando por comando na ordem acima garante sucesso.
