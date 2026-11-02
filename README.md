# André Abranjo Ramos — Site Pessoal

Site pessoal de André Abranjo Ramos, Engenheiro de Dados na Karsten S.A.

**URL:** [andre-abranjo-ramos.github.io/Site](https://andre-abranjo-ramos.github.io/Site/)

---

## Sobre o site

Site em construção forever hospedado no GitHub Pages, construído com HTML, CSS e JavaScript.

Documenta a trajetória profissional, o stack técnico atual e os projetos públicos de André, com foco no aprendizado constante.

---

## Estrutura de arquivos

```
Site/
├── index.html          # Markup principal
├── assets/
│   ├── style.css      # Todo o CSS (design tokens, layout, componentes)
│   ├── app.js          # Comportamentos: menu mobile, filtro de projetos, ano no footer
│   └── foto-andre.jpg  # Foto de perfil (adicionar manualmente)
└── README.md
```

---

## Stack técnico do site

- **HTML5** semântico
- **CSS** com custom properties (design tokens no `:root`)
- **JavaScript** vanilla — menu mobile, filtro de projetos, ano dinâmico no footer
- **Fontes:** Inter · Space Grotesk · JetBrains Mono (Google Fonts)

---

## Identidade visual

Paleta de cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#0f1f25` | Fundo principal |
| `--bg-alt` | `#132830` | Seções alternadas |
| `--surface` | `#1a323b` | Cartões |
| `--accent` | `#e67f66` | Destaque, botões, linha do tempo |
| `--accent-2` | `#d6c7a1` | Números em areia |
| `--text` | `#eeede9` | Texto principal ("oat") |

---

## Seções

| Seção | Conteúdo |
|-------|----------|
| **Início (hero)** | Posicionamento, stack, links sociais |
| **Sobre** | Trajetória, perfil rápido, habilidades |
| **Experiência** | Linha do tempo 2001–presente + formação |
| **Projetos** | Portfólio público com filtro por categoria |
| **Atuação** | Áreas de dedicação atual |
| **Contato** | LinkedIn, GitHub, e-mail |

---

## Projetos públicos referenciados

- [Visualização de Dados — Módulo 2 (SENAI SCTEC)](https://github.com/Andre-Abranjo-Ramos/turma02-visualizacao-dados-Projeto-modulo-02)

---

## Histórico de versões

| Versão | Data | O que mudou |
|--------|------|-------------|
| `v0.1` | Out 2026 | Primeira versão: estrutura HTML básica, seções Sobre / Projetos / Contato |
| `v0.2` | Nov 2026 | Nova paleta de cores aplicada; fontes Inter + Space Grotesk + JetBrains Mono; textos atualizados; atualização dos projetos |

---

## Como rodar localmente

Abra `index.html` diretamente no navegador — não precisa de servidor.

Para ver com live-reload no VS Code: extensão **Live Server** → botão "Go Live" na barra inferior.

---

## Próximos passos planejados

- [ ] Atualizar foto de perfil (`assets/foto-andre.jpg`)
- [ ] Badge do curso em andamento da Databricks Fundamentals
- [ ] Badge do curso em andamento EXIN DevOps Professional
- [ ] Atualização da Seção das certificações
- [ ] Repositório `databricks-delta-lake-basics` projeto em andamento
