# 📦 Log de Backups - Runner Marketing LP-2

Data de Criação: 2026-06-16
Projeto: runner-marketing-lp-2

---

## Backups Realizados

### Backup #0 - Inicial
- **Data**: 2026-06-16 09:49
- **Descrição**: Código inicial clonado do repositório
- **Arquivo**: `backup-0-inicial.zip`
- **Alterações**: Nenhuma (estado original)
- **Commits**: Nenhum

---

### Backup #1 - Menu com Efeito de Scroll Transparente
- **Data**: 2026-06-16 09:58
- **Descrição**: Implementação de efeito de scroll no header/menu
  - Menu fica transparente (opacidade 0) quando scroll está no topo (0px)
  - Conforme scroll para baixo, menu ganha opacidade gradualmente
  - Após 100px de scroll, menu atinge opacidade máxima (0.8-1)
  - Botões continuam 100% clicáveis em todos os estados
  - Transição suave de 300ms para melhor UX
  - Efeito aplicado também no menu mobile
- **Arquivo**: `backup-1-menu-scroll-transparent.zip`
- **Alterações**: 
  - `components/Header.tsx` - Adicionado useEffect para rastreamento de scroll, useState para scrollY, cálculo de opacidade dinâmica
  - Estilo inline com backgroundColor dinâmica baseada em scroll
  - Border-bottom e box-shadow também com opacidade dinâmica
- **Commits**: Nenhum (mudanças locais para testes)

### Backup #2 - Menu Melhorado (Estilos de Referência)
- **Data**: 2026-06-16 10:05
- **Descrição**: Melhorias visuais do menu baseado em referência fornecida
  - Botões e links **mais aparentes** quando menu está recolhido (scroll para baixo)
  - Mudança de cor dos textos: branco/transparente (topo) → escuro (scroll)
  - Sombra aumentada e mais profunda quando menu está visível
  - Botão "Diagnóstico gratuito" com **sombra dinâmica** e cores mais vibrantes
  - Menu mobile com estilos consistentes ao desktop
  - Backdrop-blur aumentado para melhor efeito
  - Arredondamento e padding refinados
- **Arquivo**: `backup-2-menu-melhorado.zip`
- **Alterações**: 
  - `components/Header.tsx` - Refatoração completa dos estilos
    - Adicionado `isScrolled` e `shadowIntensity` para controle dinâmico
    - Links mudam de `rgba(255, 255, 255, 0.8)` (topo) para `#1e293b` (scroll)
    - Text-shadow apenas no topo para melhor legibilidade
    - CTA button com sombra dinâmica baseada em scroll
    - Ícone hambúrguer com background dinâmico
    - Menu mobile com backgrounds dinâmicos para cada item
    - Transições suavizadas em 300ms
- **Commits**: Nenhum (mudanças locais para testes)

### Backup #3 - Menu em Formato Cápsula (Referência CORD)
- **Data**: 2026-06-16 10:18
- **Descrição**: Implementação do formato em cápsula do menu baseado na referência CORD
  - Menu arredondado (border-radius: rounded-2xl) como cápsula
  - **Glassmorphism** com backdrop-blur-lg
  - Padding ao redor do menu (12px top, 16px horizontal)
  - **Sem border/divisão** quando está transparente (topo)
  - Border e sombra dinâmicos que aparecem ao scroll
  - Mantém as cores originais do Runner (branco → escuro no scroll)
  - Transições suavizadas de 300ms
  - Menu flutuante com espaçamento elegante
- **Arquivo**: `backup-3-menu-capsula-dinamico.zip`
- **Alterações**: 
  - `components/Header.tsx` - Refatoração completa da estrutura
    - Alterado layout: `<div> -> <header>` como filho direto
    - Adicionado padding externo para criar efeito flutuante
    - Aplicado `rounded-2xl` para formato cápsula
    - Border aparece apenas quando `bgOpacity > 0.2` (ao scroll)
    - Sombra dinâmica com `rgba(0, 0, 0, ${shadowIntensity * 0.8})`
    - Removida a div com border-bottom e integrada a lógica no header principal
    - Menu mobile sem border top quando transparente
- **Commits**: Nenhum (mudanças locais para testes)
- **Notas**: Formatação segue exatamente a referência visual do CORD mas mantendo identidade visual do Runner

## Próximas Alterações
(Serão adicionadas conforme forem feitas)

