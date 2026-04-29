# INTEGR8 Landing Page V2 — Briefing completo

Versão: 1.0 — 28/04/2026
Estilo visual: derivado da Eight Sleep, adaptado para identidade INTEGR8
Idioma: PT-BR
Objetivo: página de vendas do protocolo INTEGR8 (CAD $49.90/mês, ciclo de 16 semanas)

---

## Decisões de projeto

Abordagem modular: index.html enxuto + CSS por seção + JS separado.
Copy: meio-termo entre VTSD e didático. Enxuto, direto, sem tecnicidade. Instiga desejo de estar dentro.
Sem ferramentas de IA na página.
Sem depoimentos reais (usar cenários do sistema operando — Opção A).
Paleta: light mode premium derivado da Eight Sleep.
Tom: leve, humano, sem sobrecarregar. A página mostra que o Integr8 é diferente sem explicar tudo. O detalhe técnico é pós-venda.

---

## Paleta de cores

| Uso | Hex | Nota |
|-----|-----|------|
| Fundo principal | #FFFFFF | Branco |
| Fundo alternado | #F9F8F7 | Off-white quente |
| Fundo escuro | #0A0A0A | Stats, CTA final, seções de contraste |
| Texto principal | #0A0A0A | Preto |
| Texto secundário | #363636 | Cinza escuro |
| Texto terciário | #696765 | Cinza médio |
| Accent principal | #4ECDC4 | Teal — do infinito-8 do logo |
| Accent escuro | #3BA89E | Hover, ícones — derivação do teal |
| Detalhe pontual | #CC3333 | Vermelho da linha ECG do logo, uso moderado |

Botões primary: fundo preto (#0A0A0A) + texto branco. Pill shape (border-radius alto).
Botões secondary: fundo branco + texto preto + borda fina.
Hover: escala sutil ou opacidade.
Accent teal reservado para ícones, destaques e elementos de UI (não para botões CTA).

---

## Tipografia

Serif (headlines): Playfair Display (Google Fonts)
Sans-serif (corpo): DM Sans (Google Fonts)

Escala sugerida:
- megaHeadline (hero, CTA final): Playfair Display, 48-72px, weight 700
- headline2 (títulos de seção): Playfair Display, 32-40px, weight 600
- headline3 (subtítulos): DM Sans, 20-24px, weight 500
- eyebrow: DM Sans, 12-14px, uppercase, letter-spacing 2-3px, cor teal ou terciária
- body1: DM Sans, 16-18px, weight 400
- body2: DM Sans, 14px, weight 400
- caption/ref: DM Sans, 12px, weight 300

---

## Estilo de UI

Cards: border-radius 12-16px, sem borda visível, sombra sutil no hover. Fundo branco sobre seções off-white.
Espaçamento: max-width 1440px, padding lateral 80px desktop / 24px mobile, gap entre seções 80-120px.
Breakpoints: 640px, 768px, 1024px, 1280px.
Ícones: SVG traço fino, estilo premium, sem cara de clipart, sem emojis.
Imagens: mockups do app INTEGR8, fotos reais ou placeholders com direção. Sem imagens genéricas de banco. Sem ilustrações flat cartoon.

---

## Estrutura de arquivos

```
integr8-landing-v2/
├── index.html
├── css/
│   ├── global.css          (reset, tipografia, variáveis CSS, utilities)
│   ├── navbar.css           (seção 1)
│   ├── hero.css             (seção 2)
│   ├── benefits.css         (seção 3)
│   ├── identificacao.css    (seção 4)
│   ├── paradigma.css        (seção 5)
│   ├── sistema.css          (seção 6)
│   ├── tabs.css             (seção 7)
│   ├── ciencia.css          (seção 8)
│   ├── pratica.css          (seção 9)
│   ├── perfis.css           (seção 10)
│   ├── stats.css            (seção 11)
│   ├── app.css              (seção 12)
│   ├── cenarios.css         (seção 13)
│   ├── coach.css            (seção 14)
│   ├── oferta.css           (seção 15)
│   ├── faq.css              (seção 16)
│   ├── cta-final.css        (seção 17)
│   └── footer.css           (seção 18)
├── js/
│   └── main.js              (navbar scroll, tabs, accordion, scroll horizontal)
├── assets/
│   ├── images/              (mockups, fotos, placeholders)
│   ├── icons/               (SVGs dos pilares, benefits, perfis)
│   └── logo/                (logo INTEGR8 PNG/SVG)
└── STATUS.md                (controle de progresso por seção)
```

---

## JS necessário (main.js)

- Navbar: scroll listener — transparente sobre hero, opaco ao rolar. Backdrop blur.
- Tabs (seção 7): click handler que troca classe ativa + crossfade na imagem/conteúdo.
- FAQ (seção 16): accordion com toggle abrir/fechar.
- Scroll horizontal (seções 10, 12, 13): scroll nativo com snap ou navegação por setas.
- Smooth scroll: comportamento nativo para links âncora da navbar.

---

## Headline, subheadline e CTAs aprovados

Headline: Seu corpo evolui quando o sistema se adapta a como você funciona.

Subheadline: Uma metodologia que monitora como o seu corpo responde e se adapta junto com você. Com acompanhamento real de um profissional que acompanha e analisa o que está acontecendo.

CTA principal (hero, benefits, oferta): Quero começar
CTA final (seção 17): Começar meu protocolo

---

# Copy por seção

---

## Seção 1 — Navbar

Arquivo CSS: navbar.css

Logo: INTEGR8 (à esquerda)
Links âncora: Como funciona | O sistema | Resultados
CTA: "Quero começar" (botão pill)

Comportamento: fixo no topo, z-index alto. Inicia transparente sobre o hero, muda para fundo sólido (branco) com sombra sutil ao rolar. Transição com backdrop-blur.
Mobile: hamburger à esquerda, logo centro, CTA à direita.

---

## Seção 2 — Hero

Arquivo CSS: hero.css

Eyebrow: Método INTEGR8

Headline: Seu corpo evolui quando o sistema se adapta a como você funciona.

Subheadline: Uma metodologia que monitora como o seu corpo responde e se adapta junto com você. Com acompanhamento real de um profissional que acompanha e analisa o que está acontecendo.

CTA: Quero começar

Layout: fullscreen viewport height. Texto alinhado à esquerda no desktop, centrado no mobile. CTA pill branco (sobre fundo escuro da imagem).

[PLACEHOLDER — IMAGEM]
Composição em camadas:
- Fundo (levemente desfocado): modelos INTEGR8 em contexto de treino/rotina. Ambiente premium, iluminação quente, tom humano.
- Primeiro plano (foco nítido): mockup do app Integr8 com dashboard + smartwatch ao lado.
- Efeito: tecnologia + dados presentes, mas presença humana é o centro. O app é ferramenta, não protagonista.
- Referência visual: slide 14 da apresentação Leticia, com camada humana por trás.

---

## Seção 3 — Benefits bar

Arquivo CSS: benefits.css

Layout: 3 colunas iguais, separadores verticais. Ícones SVG acima de cada item. Fundo branco. Padding vertical 40-60px.

Card 1:
Ícone: SVG smartphone com gráfico
Título: Treino, nutrição e acompanhamento num lugar só
Corpo: Um app exclusivo onde tudo acontece e o coach acompanha seus dados.

Card 2:
Ícone: SVG pessoa com lupa/gráfico
Título: Coach conectado aos seus dados
Corpo: Ajustes feitos com base na resposta real do seu corpo, não em protocolos genéricos.

Card 3:
Ícone: SVG escudo com check
Título: 21 dias para experimentar
Corpo: Se não fizer sentido para você, devolvemos o valor.

---

## Seção 4 — Identificação

Arquivo CSS: identificacao.css

Título: O esforço sempre foi seu. O que faltou foi o sistema certo.

Corpo:
Treinos, dietas, apps, vídeos, até orientação de inteligência artificial — você já tentou. E algumas coisas funcionaram por um tempo. Mas informação sozinha não ajusta o caminho quando algo muda. Isso ainda precisa de experiência humana.

O Integr8 junta os dois: a inteligência dos dados com o olhar de um coach que sabe o que fazer com eles.

---

## Seção 5 — Mudança de paradigma

Arquivo CSS: paradigma.css

Título: A diferença entre tentar mais e mudar o sistema.

Layout: 2 cards lado a lado. Card esquerdo em tom neutro/apagado, card direito com destaque (borda accent ou fundo levemente diferente). Sem ícones decorativos.

Card esquerdo — "Força de vontade"
- Depende de motivação diária.
- Quando a rotina desanda, o plano quebra.
- Funciona por semanas. Falha por meses.

Card direito — "Sistema que acompanha você"
- Reduz o atrito entre o que você quer fazer e o que consegue fazer.
- O sistema acompanha sua jornada e auxilia o coach a ajustar o plano conforme o seu dia a dia.
- Absorve o caos da rotina em vez de ignorar.

Referência visual: padrão "Without vs With Pod" da Eight Sleep pod-cover.

---

## Seção 6 — Visão geral do sistema

Arquivo CSS: sistema.css

Eyebrow: O sistema completo

Título: 8 pilares conectados. Um coach acompanhando tudo.

Corpo:
O Integr8 acompanha 8 variáveis da sua rotina. Cada uma conta uma parte da história. Juntas, dão ao coach a visão completa para saber o que ajustar e quando.

[PLACEHOLDER — IMAGEM/SVG]
A imagem carrega a comunicação aqui. Representação visual dos 8 pilares em círculo com ícone + nome (sem descrições técnicas). Clean, ícones de traço fino.

Os 8 pilares (apenas nomes nos ícones):
1. Treino
2. Nutrição
3. Passos
4. Hidratação
5. Pesagem
6. Fotos
7. Medidas
8. Sono

Frase de rodapé: "Cada pilar funciona sozinho. Juntos, aceleram o resultado."

Sem classificação Motor/Aceleradores/Radar na página (isso é pós-venda).
Referência visual: slide 8 da apresentação Leticia, simplificado.

---

## Seção 7 — Tabs dos pilares

Arquivo CSS: tabs.css

Eyebrow: Como funciona

Título: Treino, nutrição e acompanhamento. Tudo no seu ritmo.

Layout: tabs horizontais acima do conteúdo. Cada tab mostra imagem à direita + texto à esquerda (desktop). Mobile: tabs como botões, conteúdo empilhado abaixo.

---

### Tab 1 — Treino

Subtítulo: Seu programa no app. Adaptável ao seu dia.

Corpo:
Cada sessão de treino está programada no app com orientação visual dos movimentos e os músculos envolvidos em cada exercício. Você registra o que fez e o coach acompanha a evolução da sua força semana a semana.

Dia corrido? O programa tem opções de intensidade diferentes para que você treine o que for possível. Porque manter o hábito vivo num dia difícil vale mais do que um treino perfeito que não acontece.

Sem academia? Existem versões adaptadas para treinar em casa.

[PLACEHOLDER — IMAGEM]
Mockup do app mostrando tela de treino com exercício e animação do movimento (GIF do avatar com músculos destacados). UI real do app, limpa.

---

### Tab 2 — Nutrição

Subtítulo: Comer bem sem inventar um cardápio que não combina com você.

Corpo:
Sem lista de alimentos proibidos. Sem passar fome. O plano alimentar é montado em cima do que você já come no dia a dia, ajustado para que o resultado venha sem que sua rotina precise mudar por completo.

Você registra suas refeições no app. O coach analisa e faz os ajustes.

[PLACEHOLDER — IMAGEM]
Mockup do app mostrando registro de refeição com visual limpo. Ou: imagem estilo lifestyle de refeição normal (não fitness) com app ao lado — transmitindo normalidade, não restrição.

---

### Tab 3 — Monitoramento

Subtítulo: O app coleta suas métricas. O coach cuida do resto.

Corpo:
O app registra os dados da sua rotina de forma simples, boa parte de maneira automática pelo celular ou smartwatch. O coach analisa e identifica os sinais de quando e como ajustar o plano.

O que você vê: seu progresso real ao longo das semanas. O que o coach vê: o que precisa mudar para manter o resultado vindo.

[PLACEHOLDER — IMAGEM]
Mockup do app mostrando gráfico de tendência de progresso (peso com média móvel). Visual limpo, sem rótulos técnicos. Transmitir "clareza sobre o meu progresso".

---

## Seção 8 — A ciência

Arquivo CSS: ciencia.css

Eyebrow: O que ninguém te conta

Título: O treino é só uma parte pequena do resultado. O Integr8 cuida do dia inteiro.

Corpo:
A maioria dos programas foca só no que acontece na academia. Mas a academia ocupa apenas uma parte do seu dia. Como você dorme, quanto se movimenta, o que come, como se recupera — tudo isso pesa mais no resultado do que qualquer treino.

O Integr8 foi pensado para acompanhar você no dia inteiro. Porque o coach que só olha para o treino está ignorando quase tudo que importa.

[PLACEHOLDER — SVG/IMAGEM]
Representação visual simples do dia de 24 horas. Círculo ou barra com faixa pequena marcada como "treino" e o restante como "o que o Integr8 acompanha". Sem nomes técnicos (TMB, NEAT, EAT, TEF). Sem pirâmide com percentuais.
Mensagem visual: o treino é uma fatia pequena, o restante é tudo aquilo, e a gente olha para tudo.
Direção: clean, impactante pelo contraste visual. Não parecer infográfico acadêmico.
Referência: slide 7 da apresentação Leticia, mas sem termos técnicos.

---

## Seção 9 — Como funciona na prática

Arquivo CSS: pratica.css

Eyebrow: Na prática

Título: O programa se adapta. Você não precisa ser perfeito.

---

### Bloco A — Quando o dia não colabora

Corpo:
Noite mal dormida? Semana puxada no trabalho? Viajou e saiu da rotina? Os dados no app mostram o que mudou. O coach recalibra o caminho para manter o progresso, mesmo quando as condições mudam.

O Integr8 foi desenhado para funcionar na vida real, não numa versão idealizada dela.

---

### Bloco B — Quando o progresso estaciona

Corpo:
Platôs acontecem. É normal. A diferença é que o Integr8 detecta quando isso está acontecendo e o coach faz ajustes finos — sem cortes drásticos, sem mudanças bruscas. Pequenas correções feitas no momento certo.

A regra: manter o máximo de conforto possível pelo maior tempo possível. Só mexer quando for necessário.

[PLACEHOLDER — SVG]
Representação visual de "caminho com curvas" — a jornada não é reta, mas o progresso é constante. Editorial, quase ilustrativo, não diagrama de processo.

---

## Seção 10 — Perfis de desafio

Arquivo CSS: perfis.css

Eyebrow: Para quem é

Título: Se você se reconhece aqui, o Integr8 foi pensado para você.

Layout: grid 3x2 no desktop, scroll horizontal no mobile. Cada card com ícone SVG (traço fino) + label + título + parágrafo curto. Sem fotos nos cards.

Card 1 — Quem já fez dieta e voltou ao peso
Você sabe o ciclo: restringe, emagrece, para, recupera tudo. O problema nunca foi a sua disciplina. Foi o método que não se sustenta.

Card 2 — Quem treina mas não vê mudança no corpo
Frequência não é o problema. O que falta é o ajuste fino entre treino, alimentação e recuperação — e alguém olhando para isso junto com você.

Card 3 — Quem tem rotina imprevisível
Trabalho intenso, viagens, filhos, compromissos que mudam toda semana. Você precisa de um programa que se adapta ao caos, não que exige condições perfeitas.

Card 4 — Quem quer perder gordura sem perder massa muscular
Isso exige um equilíbrio que programa genérico não entrega. O Integr8 monitora a composição corporal para que o resultado seja perda de gordura real, não só número na balança.

Card 5 — Quem dorme mal e não conecta isso com o resultado
Sono ruim sabota dieta e treino sem você perceber. O Integr8 olha para isso como parte do programa, não como detalhe.

Card 6 — Quem mora fora do Brasil
Acompanhamento remoto, em português, adaptado à sua realidade. Fuso horário e distância não são obstáculo quando tudo acontece pelo app.

---

## Seção 11 — Stats de resultado

Arquivo CSS: stats.css

Eyebrow: Baseado em ciência

Título: Números que mostram por que o método funciona.

Layout: fundo escuro/preto. Números grandes em fonte serif. Label em corpo menor. Referência em tamanho pequeno, tom discreto. Grid 2x2 desktop, 1 coluna mobile.

Stat 1:
Número: Até 2.000 kcal/dia
Label: Diferença no gasto energético entre pessoas de mesmo peso, apenas pela forma como se movimentam no dia a dia.
Ref: Dr. James Levine, Mayo Clinic — Journal of Internal Medicine, 2007

Stat 2:
Número: 385 kcal extras/dia
Label: Consumo adicional médio em pessoas com sono insuficiente, sem aumento no gasto energético.
Ref: King's College London — European Journal of Clinical Nutrition, 2016

Stat 3:
Número: 97%
Label: Taxa de sucesso em programas que usam registro ativo e frequente como base da intervenção.
Ref: IDEA Health & Fitness Association — The Science of Self-Monitoring

Stat 4:
Número: 350 kcal/dia
Label: Gasto adicional estimado se pessoas sedentárias adotassem o padrão de movimento de pessoas ativas.
Ref: Dr. James Levine — Science, 1999

---

## Seção 12 — O app

Arquivo CSS: app.css

Eyebrow: Seu centro de comando

Título: Nunca mais vai precisar baixar diversos apps.

Corpo:
Nada fica perdido. Tudo está integrado em um único lugar, na palma da sua mão. Simples de usar. A um toque de distância.

Layout: 5 cards em grid ou scroll horizontal. Cada card com mockup da tela do app correspondente.

Card 1 — Treinos guiados
Programa completo no app com orientação visual dos movimentos e registro de carga.

Card 2 — Registro alimentar
Registre suas refeições de forma prática. O coach acompanha os padrões.

Card 3 — Evolução do peso
Registro diário que gera uma visão clara do progresso real ao longo das semanas.

Card 4 — Métricas sincronizadas
Celular e smartwatch alimentam o app com dados de movimento e atividade.

Card 5 — Comunicação direta
Chat com o coach dentro do app. Dúvidas, ajustes, acompanhamento — tudo centralizado.

[PLACEHOLDER — IMAGEM]
Para cada card: mockup da tela correspondente do app Integr8 (captura real ou mockup fiel). Visual limpo, fundo escuro, consistente entre os 5 cards.

---

## Seção 13 — O sistema na prática (cenários reais)

Arquivo CSS: cenarios.css

Eyebrow: Resultados reais

Título: O que acontece quando o sistema está funcionando.

Layout: cards lado a lado, scroll horizontal no mobile. Tipografia e layout limpos. Sem fotos.

Cenário 1 — "Viajou por 10 dias. Voltou 1,2 kg mais pesado."
Média móvel de 15 dias mostra tendência estável. Conclusão do coach: retenção hídrica. Plano mantido, sem corte. Em 5 dias o peso voltou ao patamar anterior.

Cenário 2 — "Final de semana fora do plano. Segunda com culpa."
Registro alimentar mostra que o excesso foi de 400 kcal em 2 dias. No contexto da semana, o impacto é mínimo. Coach orienta retomar normalmente. Sem compensação.

Cenário 3 — "Peso parado por 12 dias. Frustração."
Coach cruza dados: treino em dia, alimentação dentro, passos abaixo do padrão. Ajuste: pequeno aumento no movimento diário. Peso volta a cair em 6 dias.

Cenário 4 — "Dormindo 5 horas por noite. Fome descontrolada."
Coach identifica o padrão nos dados e prioriza o sono antes de qualquer ajuste nutricional. Duas semanas depois, a fome normaliza sem mexer nas calorias.

---

## Seção 14 — Quem está por trás

Arquivo CSS: coach.css

Eyebrow: Seu coach

Título: Denis Gugia

Corpo:
Analiso dados, prescrevo ajustes, monitoro evolução e encontro soluções quando a rotina complica. Do outro lado, você treina com consistência, registra no app e me conta como está se sentindo. O resultado nasce dessa parceria.

O objetivo final do programa é que você aprenda a se autogerenciar. Que entenda como o seu corpo responde e saiba o que ajustar por conta própria. Meu trabalho é te levar até esse ponto.

[PLACEHOLDER — FOTO]
Foto profissional do Denis. Ambiente de treino ou casual-profissional, iluminação premium, fundo neutro. Sem pose de personal trainer com braços cruzados. Tom: acessível, competente.

---

## Seção 15 — Oferta e preço

Arquivo CSS: oferta.css

Eyebrow: Comece agora

Título: Um plano. Tudo incluso. Sem surpresa.

Layout: card de oferta centrado com fundo destacado.

Protocolo INTEGR8
CAD $49.90/mês

Ciclo de 16 semanas (CAD $199.60 por ciclo)
Cobrança automática mensal. Cancele quando quiser.

O que está incluso:
- Programa de treino personalizado no app
- Plano alimentar adaptado à sua rotina
- Monitoramento dos 8 pilares pelo coach
- Ajustes contínuos baseados nos seus dados
- Comunicação direta pelo app

Garantia de 21 dias. Se não fizer sentido para você, devolvemos o valor.

CTA: Quero começar agora

Linha adicional (tom sutil, abaixo do CTA):
O programa foi desenhado para evoluir com você. Cada ciclo se adapta ao que o anterior revelou sobre o seu corpo.

---

## Seção 16 — FAQ

Arquivo CSS: faq.css

Título: Perguntas frequentes

Layout: accordion. Click para abrir/fechar cada pergunta.

Q1: Como funciona o programa?
Você recebe acesso ao app Integr8 com seu programa de treino e plano alimentar. Registra suas métricas no app, e o coach acompanha tudo em tempo real para fazer os ajustes necessários. A comunicação acontece diretamente pelo app.

Q2: Preciso ir à academia?
O programa prioriza treino em academia, mas existem versões adaptadas para treinar em casa com equipamento mínimo.

Q3: Funciona para quem mora fora do Brasil?
O programa foi pensado para isso. Tudo acontece pelo app, em português, independente de onde você esteja. Fuso horário e distância não são obstáculo.

Q4: Como é a comunicação com o coach?
Diretamente pelo app. Dúvidas, relatos, ajustes — tudo centralizado num lugar só. Sem depender de WhatsApp ou e-mail.

Q5: E se eu viajar ou ficar doente?
O programa se adapta. O coach ajusta treino e alimentação conforme a situação. Você não perde progresso por uma semana fora da rotina.

Q6: Preciso de smartwatch?
Não é obrigatório, mas recomendado. O smartwatch automatiza a coleta de dados como passos e atividade, o que facilita o acompanhamento.

Q7: Como funciona a garantia?
Você tem 21 dias para experimentar. Se decidir que não é para você, devolvemos o valor pago (valor líquido, descontadas taxas da plataforma de pagamento).

Q8: Posso cancelar a qualquer momento?
Sim. Sem burocracia, sem multa. O programa recomenda um compromisso mínimo de 16 semanas para que os resultados apareçam, mas a decisão é sempre sua.

---

## Seção 17 — CTA final

Arquivo CSS: cta-final.css

Layout: fundo escuro/preto. Texto é o protagonista.

Frase principal (serif, grande):
Seu resultado começa quando o sistema começa a te ouvir.

CTA: Começar meu protocolo

[PLACEHOLDER — IMAGEM]
Imagem sutil ao fundo — ambiente premium, desfocado. Pode ser a mesma composição de modelos Integr8 do hero, em versão mais escura.

---

## Seção 18 — Footer

Arquivo CSS: footer.css

Logo INTEGR8
Links: Termos de uso | Política de privacidade | Contato
Social: Instagram | [outros se aplicável]
Linha: © 2026 INTEGR8. Powered by FitBudd.

---

# Referências visuais (slides da apresentação Leticia)

| Seção da página | Slide de referência | O que adaptar |
|-----------------|---------------------|---------------|
| Hero | Slide 14 (app + watch) | Adicionar camada humana desfocada ao fundo |
| Paradigma (seção 5) | Slide 6 (Força de Vontade vs Arquitetura) | Simplificar, remover ícones decorativos |
| Sistema (seção 6) | Slide 8 (8 pilares em círculo) | Remover nome da cliente, simplificar para apenas ícone + nome |
| Ciência (seção 8) | Slide 7 (Iceberg Metabólico) | Remover termos técnicos, manter apenas contraste visual treino vs resto do dia |
| Prática (seção 9) | Slide 15 (fluxograma ajustes) | Substituir por representação de jornada com curvas |

---

# Notas para desenvolvimento no Claude Code

1. Cada seção é um bloco HTML com ID correspondente (ex: `<section id="hero">`, `<section id="benefits">`).
2. O index.html carrega todos os CSS no head e o main.js antes do fechamento do body.
3. CSS global contém variáveis CSS com a paleta, tipografia e espaçamentos. Cada CSS de seção usa essas variáveis.
4. Imagens placeholder: usar divs com fundo cinza (#E5E5E5), aspect ratio correto, e texto centralizado descrevendo o que vai ali (ex: "Mockup app + modelos INTEGR8").
5. SVG dos ícones dos 8 pilares: criar inline ou como arquivo separado em assets/icons/. Traço fino, monocromático (teal ou cinza), sem preenchimento.
6. Responsividade: mobile-first. Cada CSS de seção contém seus próprios media queries.
7. Performance: lazy loading em imagens abaixo do fold. Fonts com display=swap.
8. A seção de stats (11) deve ter os números animando de 0 ao valor final quando entram no viewport (Intersection Observer + CSS counter ou JS simples).
9. Prioridade de substituição de placeholders: Hero > Coach (foto Denis) > App (mockups reais) > Perfis (ícones SVG finais).

---

# SEO, GEO e AIO — Instruções completas

A página deve ser otimizada simultaneamente para buscadores tradicionais (Google), AI Overviews (Google), e motores generativos (ChatGPT, Perplexity, Gemini, Claude). A estratégia muda de densidade de palavras-chave para autoridade, clareza e estrutura citável.

---

## 1. Meta tags e head

```html
<title>INTEGR8 — Consultoria de fitness personalizada com dados em tempo real | Toronto</title>
<meta name="description" content="Programa de treino e nutrição com acompanhamento por app e coach dedicado. 8 pilares monitorados em tempo real. Para adultos que querem resultado sustentável sem abrir mão da vida real. Toronto, Canadá.">
<meta name="keywords" content="personal trainer online, consultoria fitness personalizada, treino e nutrição com acompanhamento, fitness coaching Toronto, programa de treino com app, coach fitness brasileiro Toronto, INTEGR8">
<link rel="canonical" href="https://www.integr8fitness.com/">
<meta property="og:title" content="INTEGR8 — Seu corpo evolui quando o sistema se adapta a como você funciona">
<meta property="og:description" content="Programa de treino e nutrição com 8 pilares monitorados em tempo real. App dedicado + coach pessoal.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.integr8fitness.com/">
<meta property="og:image" content="[URL da imagem OG — 1200x630]">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<html lang="pt-BR">
```

Nota: criar imagem OG específica (1200x630) com logo INTEGR8 + headline + visual premium. Não usar placeholder genérico.

---

## 2. Estrutura semântica HTML

Cada seção usa tags semânticas corretas:

```
<header> — navbar
<main> — todo o conteúdo entre navbar e footer
  <section id="hero" aria-label="Apresentação">
  <section id="benefits" aria-label="Diferenciais">
  <section id="identificacao" aria-label="Identificação">
  ...etc
</main>
<footer>
```

Hierarquia de headings rigorosa — um único H1 na página (headline do hero). Demais seções usam H2. Subtítulos dentro das seções usam H3. Sem pular níveis (H1 → H3 sem H2).

```
<h1>Seu corpo evolui quando o sistema se adapta a como você funciona</h1>  <!-- ÚNICO H1 -->
<h2>O esforço sempre foi seu. O que faltou foi o sistema certo.</h2>       <!-- seção 4 -->
<h2>8 pilares conectados. Um coach acompanhando tudo.</h2>                 <!-- seção 6 -->
<h3>Seu programa no app. Adaptável ao seu dia.</h3>                        <!-- tab 1 -->
```

Alt text em todas as imagens (reais ou placeholder). Descritivo e relevante, não "imagem1.png".

---

## 3. Schema Markup (JSON-LD)

Três blocos de Schema no head do index.html, combinados num único script:

### Bloco 1 — Person + Service (Denis como entidade + Integr8 como oferta)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.integr8fitness.com/#denis",
  "name": "Denis Gugia",
  "jobTitle": "Fitness Coach",
  "url": "https://www.integr8fitness.com/",
  "image": "[URL foto Denis]",
  "sameAs": [
    "https://www.instagram.com/[integr8]",
    "https://www.linkedin.com/in/[denisgugia]"
  ],
  "knowsAbout": [
    "Personal training",
    "Nutrition coaching",
    "Body composition",
    "Flexible dieting",
    "NEAT optimization",
    "Habit architecture",
    "Self-monitoring for weight management"
  ],
  "makesOffer": {
    "@type": "Offer",
    "name": "Protocolo INTEGR8",
    "description": "Programa de treino e nutrição personalizado com 8 pilares monitorados em tempo real por app dedicado e coach pessoal.",
    "price": "49.90",
    "priceCurrency": "CAD",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://www.integr8fitness.com/#oferta",
    "seller": {
      "@type": "LocalBusiness",
      "@id": "https://www.integr8fitness.com/#business",
      "name": "INTEGR8",
      "areaServed": [
        {"@type": "City", "name": "Toronto"},
        {"@type": "Country", "name": "Canada"},
        {"@type": "Country", "name": "Brazil"}
      ],
      "serviceType": "Online Fitness Coaching"
    }
  }
}
```

### Bloco 2 — FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona o programa INTEGR8?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você recebe acesso ao app Integr8 com seu programa de treino e plano alimentar. Registra suas métricas no app, e o coach acompanha tudo em tempo real para fazer os ajustes necessários. A comunicação acontece diretamente pelo app."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso ir à academia para fazer o INTEGR8?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O programa prioriza treino em academia, mas existem versões adaptadas para treinar em casa com equipamento mínimo."
      }
    },
    {
      "@type": "Question",
      "name": "O INTEGR8 funciona para quem mora fora do Brasil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O programa foi pensado para isso. Tudo acontece pelo app, em português, independente de onde você esteja. Fuso horário e distância não são obstáculo."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso de smartwatch para o programa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não é obrigatório, mas recomendado. O smartwatch automatiza a coleta de dados como passos e atividade, o que facilita o acompanhamento."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a garantia do INTEGR8?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você tem 21 dias para experimentar. Se decidir que não é para você, devolvemos o valor pago."
      }
    },
    {
      "@type": "Question",
      "name": "Posso cancelar a qualquer momento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Sem burocracia, sem multa. O programa recomenda um compromisso mínimo de 16 semanas para que os resultados apareçam, mas a decisão é sempre sua."
      }
    },
    {
      "@type": "Question",
      "name": "Como é a comunicação com o coach no INTEGR8?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diretamente pelo app. Dúvidas, relatos, ajustes — tudo centralizado num lugar só."
      }
    },
    {
      "@type": "Question",
      "name": "E se eu viajar ou ficar doente durante o programa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O programa se adapta. O coach ajusta treino e alimentação conforme a situação. Você não perde progresso por uma semana fora da rotina."
      }
    }
  ]
}
```

### Bloco 3 — WebPage com referências científicas

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "INTEGR8 — Consultoria de fitness personalizada",
  "description": "Programa de treino e nutrição com 8 pilares monitorados em tempo real por app dedicado e coach pessoal.",
  "url": "https://www.integr8fitness.com/",
  "inLanguage": "pt-BR",
  "author": {"@id": "https://www.integr8fitness.com/#denis"},
  "citation": [
    {
      "@type": "ScholarlyArticle",
      "name": "Nonexercise activity thermogenesis – liberating the life-force",
      "author": "James A. Levine",
      "publisher": "Journal of Internal Medicine",
      "datePublished": "2007"
    },
    {
      "@type": "ScholarlyArticle",
      "name": "The effects of partial sleep deprivation on energy balance",
      "publisher": "European Journal of Clinical Nutrition",
      "datePublished": "2016"
    },
    {
      "@type": "ScholarlyArticle",
      "name": "Flexible vs. rigid dieting in resistance-trained individuals",
      "author": "Conlin et al.",
      "publisher": "Journal of the International Society of Sports Nutrition",
      "datePublished": "2021"
    }
  ]
}
```

---

## 4. Conteúdo baseado em respostas (GEO/AIO)

IAs extraem conteúdo que responde perguntas diretamente. As seguintes estruturas na página facilitam citação:

### Seção FAQ (seção 16)
Já estruturada em formato pergunta-resposta. As respostas começam com a informação direta, sem introdução.

### Seções de conteúdo
Cada seção da página deve ter seu H2 formulado como resposta implícita a uma pergunta que o público faria:

| Pergunta implícita que a IA faria | H2 da seção que responde |
|---|---|
| "Como funciona consultoria de fitness online com dados?" | 8 pilares conectados. Um coach acompanhando tudo. |
| "Treino personalizado funciona pelo app?" | Treino, nutrição e acompanhamento. Tudo no seu ritmo. |
| "Por que o treino sozinho não traz resultado?" | O treino é só uma parte pequena do resultado. |
| "Programa de fitness se adapta à rotina?" | O programa se adapta. Você não precisa ser perfeito. |
| "Quanto custa consultoria de fitness online?" | Um plano. Tudo incluso. Sem surpresa. CAD $49.90/mês |

### Parágrafos curtos e escaneáveis
Todos os blocos de copy já estão escritos com parágrafos de 2-3 frases. Manter. IAs preferem blocos curtos e diretos a parágrafos longos.

---

## 5. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

### Experience
- Seção 14 (coach): Denis apresentado com credenciais e filosofia.
- Seção 13 (cenários): demonstra experiência prática operando o sistema com clientes reais.

### Expertise
- Seção 11 (stats): referências científicas com citação de fonte (Levine, King's College London, IDEA Health).
- Copy da página usa terminologia correta sem ser técnico (ex: "hormônios de fome e saciedade" em vez de termos leigos vagos).

### Authoritativeness
- Schema Person com knowsAbout detalhado.
- Referências científicas linkadas no Schema como citation.
- [AÇÃO FUTURA] Criar perfil do Denis e da INTEGR8 em diretórios: Google Business Profile, LinkedIn, diretórios de fitness (FitLink, PT Directory Canada), e garantir NAP consistente (Name, Address, Phone).

### Trustworthiness
- Garantia de 21 dias explícita.
- Preço transparente sem pegadinhas.
- Cancelamento sem multa.
- FAQ respondendo objeções comuns com clareza.

---

## 6. Otimização técnica para crawlers de IA

### robots.txt
Não bloquear crawlers de IA. Verificar que o robots.txt não contenha:
```
User-agent: ChatGPT-User
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

Se usar Cloudflare, verificar configuração de AI bot blocking (Cloudflare mudou defaults para bloquear AI bots automaticamente).

### llms.txt (recomendado)
Criar arquivo llms.txt na raiz do site para ajudar IAs a entender a estrutura:

```
# INTEGR8 — Consultoria de fitness personalizada
# https://www.integr8fitness.com

## Sobre
INTEGR8 é um programa de treino e nutrição personalizado com 8 pilares monitorados em tempo real via app dedicado e coach pessoal. Criado por Denis Gugia, fitness coach baseado em Toronto, Canadá. Atende clientes remotamente em português.

## Serviço principal
Protocolo INTEGR8: CAD $49.90/mês, ciclo de 16 semanas. Inclui treino personalizado, plano alimentar, monitoramento de 8 pilares (treino, nutrição, passos, hidratação, pesagem, fotos, medidas, sono), ajustes contínuos baseados em dados, comunicação direta pelo app.

## Público
Adultos 35+ que querem resultado sustentável em composição corporal sem abrir mão da vida real. Foco em brasileiros no Canadá e exterior, mas aberto a qualquer pessoa que fale português.

## Diferencial
Sistema de 8 pilares integrados com dados em tempo real + coach humano analisando e ajustando. Dieta sem alimentos proibidos. Programa adaptável à rotina imprevisível. Baseado em ciência do comportamento e fisiologia metabólica.

## Contato
Website: https://www.integr8fitness.com
Instagram: [URL]
```

### Renderização server-side
O conteúdo principal da página deve ser renderizado no HTML servido (não dependente de JavaScript para aparecer). Crawlers de IA e Google podem não executar JS. Todas as seções de copy, FAQ e stats devem estar no HTML estático. JS só para interatividade (tabs, accordion, scroll, animações).

### Performance
- Imagens: WebP com fallback JPG. Lazy loading abaixo do fold.
- Fonts: preconnect + display=swap.
- CSS: cada arquivo de seção é pequeno (<5KB). Carregar todos no head (não async, para evitar FOUC).
- JS: defer no main.js. Nenhum JS bloqueante.
- Target: Lighthouse score >90 em Performance, Accessibility, Best Practices e SEO.

---

## 7. Palavras-chave e semântica

### Cluster principal
- personal trainer online
- consultoria fitness personalizada
- treino e nutrição com acompanhamento
- programa de treino com app
- coach fitness online

### Cluster local (Toronto/Canadá)
- personal trainer Toronto
- fitness coach brasileiro Toronto
- treino online para brasileiros no Canadá
- personal trainer online Toronto

### Cluster de intenção (perguntas que as pessoas fazem)
- como funciona consultoria de fitness online
- vale a pena personal trainer online
- programa de treino personalizado com app
- como perder gordura sem perder massa muscular
- dieta que se adapta à rotina
- por que dieta restritiva não funciona

### Implementação
Não usar keyword stuffing. As palavras-chave entram naturalmente no copy aprovado, nos H2/H3, nos alt text das imagens, na meta description e no Schema. A densidade vem da cobertura semântica do tema, não da repetição forçada.

---

## 8. Estratégia de entidade (ser encontrado pelas IAs)

Para que IAs como ChatGPT e Perplexity citem a INTEGR8 quando alguém perguntar sobre personal trainer online ou fitness coaching em Toronto:

### Ações na página (implementar agora)
- Schema Person + LocalBusiness + FAQPage (descrito acima)
- llms.txt na raiz
- Conteúdo estruturado em formato pergunta-resposta
- Referências científicas com atribuição

### Ações fora da página (implementar depois)
- Google Business Profile configurado e atualizado (NAP consistente)
- Perfil no LinkedIn com descrição alinhada ao Schema
- Listagem em diretórios de fitness relevantes (FitLink, Canadá PT directories)
- Publicar artigos/posts em plataformas externas mencionando INTEGR8 (Medium, LinkedIn Articles, Reddit fitness communities)
- Buscar menções em blogs, podcasts ou matérias sobre fitness online para brasileiros no exterior
- Manter perfis de social media com NAP consistente e link para o site

### Medição
- Monitorar manualmente: perguntar aos chatbots (ChatGPT, Perplexity, Gemini) sobre "personal trainer online Toronto", "fitness coaching para brasileiros no Canadá", "programa de treino com app" a cada 2 semanas e registrar se INTEGR8 aparece nas respostas
- GA4: criar segmento para tráfego vindo de referrers de IA (chat.openai.com, perplexity.ai, etc.)
- Search Console: monitorar impressões para os clusters de palavras-chave acima

---

## 9. Checklist de implementação SEO/GEO/AIO

```
[ ] Meta tags completas no head (title, description, OG, Twitter Card)
[ ] lang="pt-BR" no html tag
[ ] Canonical URL definida
[ ] Hierarquia de headings correta (1x H1, H2 por seção, H3 para sub)
[ ] Alt text em todas as imagens
[ ] Schema JSON-LD: Person + FAQPage + WebPage (3 blocos)
[ ] FAQ com respostas diretas (sem introdução vaga)
[ ] robots.txt não bloqueia crawlers de IA
[ ] llms.txt criado na raiz
[ ] Conteúdo renderizado em HTML estático (não dependente de JS)
[ ] Performance: Lighthouse >90 nos 4 critérios
[ ] Imagens em WebP com lazy loading
[ ] Fonts com preconnect e display=swap
[ ] URL limpa e descritiva
[ ] Sitemap.xml gerado
[ ] Google Business Profile criado [pós-lançamento]
[ ] NAP consistente em todos os perfis [pós-lançamento]
[ ] Listagem em diretórios de fitness [pós-lançamento]
[ ] Monitoramento de citação por IAs configurado [pós-lançamento]
```
