# Brainstorm de Design — FLG de Cortes e Vinco

## Contexto
Landing page premium para empresa especializada em facas para corte e vinco de embalagens e pastas. Cores da marca: vermelho (#E01E1E), branco e preto. Mais de 20 anos no mercado. Público: indústria gráfica, fabricantes de embalagens.

---

<response>
<text>

## Ideia 1 — Industrial Precision (Probabilidade: 0.07)

**Design Movement:** Brutalismo Industrial com toques de Minimalismo Suíço

**Core Principles:**
- Geometria rígida e linhas de corte como elemento visual central
- Contraste máximo: preto profundo vs. vermelho sangue vs. branco puro
- Tipografia bold e impactante que transmite força e precisão
- Espaçamento generoso que dá "respiro" ao conteúdo denso

**Color Philosophy:**
- Preto #0A0A0A como base dominante (90% das seções escuras)
- Vermelho #E01E1E como acento agressivo e chamadas à ação
- Branco #F5F5F5 para texto e seções de contraste
- Cinza #1A1A1A para cards e superfícies elevadas

**Layout Paradigm:**
- Assimétrico: textos alinhados à esquerda com imagens cortadas diagonalmente à direita
- Hero com split-screen: texto à esquerda, galeria de imagens à direita em grid 2x2
- Seções alternando fundo preto e branco para ritmo visual

**Signature Elements:**
- Linhas diagonais vermelhas cortando seções (evocando lâminas de corte)
- Bordas vermelhas espessas em cards e destaques
- Números grandes e bold como decoração de fundo (20+, etc.)

**Interaction Philosophy:**
- Hover em cards: borda vermelha aparece com slide da esquerda
- Botões com efeito "corte": linha vermelha que atravessa o botão no hover
- Scroll reveal com fade + translate-Y suave

**Animation:**
- Entrada de elementos: fade-in + translateY(30px) com stagger de 100ms
- Navbar: fundo escuro aparece com blur ao scrollar
- Números contadores animados ao entrar na viewport
- Linha decorativa vermelha que "desenha" ao entrar na viewport

**Typography System:**
- Display: Barlow Condensed Bold/ExtraBold — impacto industrial
- Body: Barlow Regular — leitura confortável
- Accent: Barlow SemiBold em caps para labels e categorias

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Ideia 2 — Precision Craft (Probabilidade: 0.06) ← ESCOLHIDA

**Design Movement:** Modernismo Construtivista com elegância corporativa premium

**Core Principles:**
- Precisão técnica refletida em grid rigoroso e alinhamentos exatos
- Hierarquia visual clara: tamanhos de fonte com saltos dramáticos
- Superfícies escuras com textura sutil (noise) para profundidade
- Vermelho como elemento de energia e urgência, usado com parcimônia

**Color Philosophy:**
- Fundo principal: #111111 (quase preto, com textura grain)
- Superfícies de card: #1C1C1C
- Vermelho primário: #D91E1E — energia, ação, destaque
- Vermelho hover: #B01515
- Branco texto: #F0F0F0
- Cinza texto secundário: #888888

**Layout Paradigm:**
- Hero: coluna de texto à esquerda (60%) + placeholder de imagem à direita (40%) com borda vermelha
- Seções de serviços: grid de 3 colunas com cards elevados
- "Por que escolher" com layout de lista numerada estilizada
- Depoimentos em carrossel horizontal

**Signature Elements:**
- Linha vermelha vertical como separador de seções e decoração
- Aspas grandes em vermelho nos depoimentos
- Tag/badge "20+ anos" em vermelho como elemento flutuante

**Interaction Philosophy:**
- Scroll suave entre seções com âncoras
- Cards com elevação sutil no hover (translateY -4px + sombra vermelha)
- Botão primário vermelho com efeito ripple
- FAQ com accordion animado

**Animation:**
- Framer Motion para scroll reveal (useInView)
- Stagger em listas e grids
- Navbar transparente → sólida com backdrop-blur ao scroll
- Contador animado para "20+ anos"

**Typography System:**
- Display: Bebas Neue — impacto máximo para títulos grandes
- Subtítulos: Montserrat Bold
- Body: Montserrat Regular/Medium
- Labels: Montserrat SemiBold uppercase com letter-spacing

</text>
<probability>0.06</probability>
</response>

<response>
<text>

## Ideia 3 — Clean Precision (Probabilidade>: 0.08)

**Design Movement:** Minimalismo Escandinavo com identidade industrial

**Core Principles:**
- Fundo branco dominante com acentos pretos e vermelhos pontuais
- Muito espaço em branco como elemento de luxo
- Tipografia serifada para sofisticação, sans-serif para funcionalidade
- Fotografia como elemento central (placeholders bem dimensionados)

**Color Philosophy:**
- Fundo: #FFFFFF puro
- Preto: #111111 para textos e elementos estruturais
- Vermelho: #CC1B1B apenas para CTAs e destaques
- Cinza claro: #F4F4F4 para seções alternadas

**Layout Paradigm:**
- Hero full-width com texto centralizado sobre placeholder de imagem
- Grid masonry para galeria de serviços
- Seções com muito padding vertical

**Signature Elements:**
- Linha fina vermelha como underline decorativo em títulos
- Ícones minimalistas de linha fina
- Bordas finas em cards sem sombra

**Interaction Philosophy:**
- Hover muito sutil, quase imperceptível
- Transições lentas e elegantes (600ms+)
- Scroll parallax suave

**Animation:**
- Fade-in muito suave (opacity apenas)
- Sem translate ou scale
- Transições de cor lentas nos botões

**Typography System:**
- Display: Playfair Display Bold — elegância clássica
- Body: Source Sans Pro
- Labels: Source Sans Pro SemiBold

</text>
<probability>0.08</probability>
</response>

---

## Decisão Final

**Escolhida: Ideia 2 — Precision Craft**

Design Modernismo Construtivista com elegância corporativa premium. Fundo escuro (#111111) com vermelho (#D91E1E) como acento de energia, tipografia Bebas Neue para impacto nos títulos e Montserrat para corpo de texto. Layout assimétrico com hero split-screen, animações suaves com Framer Motion e scroll reveal.
