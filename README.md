# Runner Marketing — Landing Page

Landing page de vendas (one-page) para a agência **Runner Marketing**, focada em
marketing médico em conformidade com a **Resolução CFM nº 2.336/2023**.

---

## 🚀 Como rodar

> **Node.js 20.9+ obrigatório** (o Next.js 16 não roda em versões antigas).
> Se usa `nvm`: `nvm use 22` antes dos comandos.

```bash
npm install
npm run dev      # ambiente de desenvolvimento → http://localhost:3000
npm run build    # build de produção
```

## ☁️ Deploy na Vercel

1. Suba o projeto para um repositório GitHub.
2. Importe na [Vercel](https://vercel.com) → ela detecta Next.js automaticamente.
3. Clique em **Deploy**.

---

## 🗂️ Onde fica cada coisa

```
app/
  siteConfig.ts            ← TEXTO E DADOS do site (edite aqui!)
  especialidadesData.tsx   ← lista do Seletor de Especialidade
  globals.css              ← cores da marca + animações
  layout.tsx               ← SEO, fontes, dados estruturados
  page.tsx                 ← ordem dos blocos na página
components/                 ← um componente por bloco
public/
  logo-runner.svg          ← logo oficial (header e rodapé)
  hero-bg.mp4              ← vídeo de fundo do topo (já comprimido)
  time/                    ← fotos do time (flavio.jpg, gabriel.jpg)
  projetos/                ← imagens dos projetos (opcional)
```

**Regra de ouro:** 90% das edições de texto são em **`app/siteConfig.ts`**.
Você quase nunca precisa abrir os componentes.

---

## 🧱 Racional bloco a bloco

A página é montada na ordem definida em [`app/page.tsx`](app/page.tsx). Abaixo,
o que cada bloco faz e **onde mexer** para trocar nome, texto ou imagem.

### 1. Header — `components/Header.tsx`
Barra fixa no topo: logo + menu + botão "Diagnóstico gratuito".
- **Logo:** troque o arquivo `public/logo-runner.svg`. O tamanho está em
  `className="h-11 sm:h-12"` dentro do componente.
- **Itens do menu:** edite a lista `navLinks` no topo do arquivo (cada item
  aponta para o `id` de uma seção, ex.: `#especialidades`).
- **Botão CTA:** leva para `#contato`.

### 2. Hero (topo) — `components/Hero.tsx`
Primeira dobra, com o **vídeo de fundo** e a headline de impacto.
- **Vídeo de fundo:** substitua `public/hero-bg.mp4` (e, se quiser, o
  `public/hero-bg-poster.jpg`, que aparece antes do vídeo carregar). O vídeo é
  mudo, em loop e otimizado — mantenha-o leve (idealmente < 2 MB).
- **Headline / subtítulo / botão:** o texto está direto no componente (são fixos,
  parte da mensagem da marca).
- O degradê escuro por cima do vídeo garante a legibilidade do texto branco.

### 3. VSL (vídeo de vendas) — `components/VSL.tsx`
Player de vídeo (YouTube/Vimeo).
- **Vídeo:** preencha `videoUrl` em `siteConfig.ts` com o link de embed.
  Enquanto estiver `[VIDEO_URL]`, aparece um placeholder.

### 4. Seletor de Especialidade — `components/SeletorEspecialidade.tsx`
Bloco **interativo**: o médico escolhe a especialidade num menu e o bloco se
reconstrói na hora (cor do tema, ícone que se desenha, headline, métricas e
exemplo de anúncio). O botão de CTA já abre o WhatsApp citando a especialidade.
- **Conteúdo de cada especialidade:** edite a lista em
  [`app/especialidadesData.tsx`](app/especialidadesData.tsx). Cada item tem:
  - `id` — identificador interno (sem espaços).
  - `nome` — o que aparece no menu.
  - `cor` — cor tema em hexadecimal (tinge o bloco inteiro).
  - `headline` — frase principal da área.
  - `anuncio` — exemplo de criativo/anúncio.
  - `metricas` — três pares `{ valor, rotulo }` (**números são fictícios**,
    troque pelos reais de cada cliente).
  - `icone` — SVG de traço (já incluso). Para trocar, cole outro `<svg>` com
    `pathLength={1}` nos traços para a animação de "desenhar" funcionar.
- **Adicionar/remover especialidade:** basta acrescentar ou apagar um item da
  lista — o resto se ajusta sozinho.
- **Acessibilidade:** respeita "reduzir movimento" do sistema e tem foco visível.

### 5. Provas sociais (avaliações Google) — `components/ProvasSociais.tsx`
Selo de nota do Google + **carrossel automático** de avaliações + botão verde
do WhatsApp. O carrossel anda sozinho e pausa quando o mouse passa por cima.
- **Avaliações:** edite a lista `avaliacoes` em `siteConfig.ts`. Cada item tem
  `nome`, `data`, `nota` (1–5), `texto`, `cor` (do avatar) e `foto` (opcional —
  coloque em `public/avaliacoes/` e referencie `/avaliacoes/arquivo.jpg`).
  > ⚠️ Mantenha como placeholder até ter as avaliações reais — não invente.
- **Nota / quantidade / link do Google:** campos `notaGoogle`, `qtdAvaliacoes`,
  `linkGoogleBusiness`.

### 6. O que fazemos (especialidades de serviço) — `components/Especialidades.tsx`
Grid de 6 serviços (tráfego, redes, reels, identidade, sites, relatórios).
- Os cards estão no array `servicos` no topo do componente (título + descrição +
  ícone `lucide-react`).

### 7. Método e resultados — `components/Metodo.tsx`
As 4 etapas (Diagnóstico → Posicionamento → Captação → Conversão) + 3 métricas.
- **Etapas:** array `etapas` no componente.
- **Métricas:** array `metricas` em `siteConfig.ts` (**valores fictícios** — ajuste).

### 8. Método → Mapa de atuação — `components/MapaAtuacao.tsx`
Mapa interativo do Brasil. Ao passar o mouse (ou tocar) num estado, mostra
**médicos atendidos, agendamentos gerados e faturamento gerado** daquela região.
- **Dados por estado:** edite o objeto `dadosUF` no topo do componente. A chave é
  a sigla da UF (`SP`, `RO`, `RJ`…). **Valores são fictícios** — troque pelos reais.
  Só os estados listados aí ficam coloridos como "atendidos"; os demais mostram
  "Sem operação nesta região ainda".
- O desenho do mapa fica em `components/brasilSvg.ts` (não precisa editar).

### 9. Projetos Runner — `components/ProjetosRunner.tsx`
Cards com **foto de perfil** + **botão que leva ao Instagram** do projeto.
- **Conteúdo:** lista `projetos` em `siteConfig.ts`, cada um com `nome`, `handle`,
  `categoria`, `foto` (em `public/projetos/`) e `instagram` (URL do perfil).
- As fotos de perfil já foram baixadas dos 3 perfis informados. Para atualizar,
  troque o arquivo em `public/projetos/`.

### 10. Time — `components/Time.tsx`
Grid de 4 cards (foto + badge + nome + função + descrição).
- **Conteúdo:** lista `time` em `siteConfig.ts`.
- **Fotos:** coloque `flavio.jpg` e `gabriel.jpg` em `public/time/` (retrato 4:5,
  ~800×1000px). Sem foto, o card mostra um avatar placeholder automaticamente.

### 11. CTA final (formulário) — `components/CTAFinal.tsx`
Formulário (Nome, WhatsApp, Especialidade) que **abre o WhatsApp** já preenchido.
- Não depende de backend. Para plugar um backend depois, use o campo
  `endpointForm` em `siteConfig.ts`.
- **Prazo de resposta:** campo `prazoDias`.

### 12. Rodapé — `components/Rodape.tsx`
Logo, contatos, navegação e a linha de conformidade CFM.
- Dados em `siteConfig.ts` (`whatsappDisplay`, `email`, `instagram`, etc.).

### Botão flutuante de WhatsApp — `components/FloatingWhatsApp.tsx`
Fica fixo no canto inferior direito em todas as telas. Usa o mesmo número/mensagem.

---

## 📱 WhatsApp (número + mensagem automática)

Tudo centralizado no topo de [`app/siteConfig.ts`](app/siteConfig.ts):

```ts
const WHATSAPP_NUMERO  = "5511997188406";  // DDI+DDD+número, só dígitos
const WHATSAPP_MENSAGEM = "Olá! Vim pelo site da Runner e quero um diagnóstico...";
```

- **Trocar o número:** edite `WHATSAPP_NUMERO` (formato internacional, só números).
- **Trocar a mensagem padrão:** edite `WHATSAPP_MENSAGEM`. Ela já vem preenchida
  no app do WhatsApp quando o lead clica em qualquer botão.
- O Seletor de Especialidade gera uma mensagem específica citando a área escolhida.

---

## 🎨 Identidade visual

Cores extraídas da logo oficial (em `app/globals.css`):

| Uso | Cor |
|---|---|
| Ciano da marca (CTAs, destaques) | `#05bbcd` |
| Azul-petróleo (seções escuras, títulos) | `#08263a` (`text-ink` / `bg-ink`) |
| Tints claros | `#4edde8` · `#93eaf0` · `#e9f7f9` |

A paleta `teal` do Tailwind foi sobrescrita pelo ciano da marca, então qualquer
classe `bg-teal-*` / `text-teal-*` já usa a cor da Runner.

**Fontes:** Sora (títulos) + Inter (corpo), via `next/font`.

---

## ✅ Boas práticas mantidas

- **Mobile-first** e responsivo.
- **Acessibilidade:** contraste, foco visível, `alt` em imagens, respeito a
  "reduzir movimento".
- **SEO:** title, description, Open Graph e dados estruturados (LocalBusiness)
  para São Paulo e Porto Velho.
- **Sem promessa de resultado nem escassez agressiva** — coerente com o CFM.
- Depoimentos, notas e nomes ficam como **placeholder** até você ter os dados reais.
