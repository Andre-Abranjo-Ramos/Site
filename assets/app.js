/* ==========================================================================
   SITE PESSOAL — ANDRÉ ABRANJO RAMOS
   app.js — menu mobile, filtro de projetos, ano no footer
   ========================================================================== */

/* ── Menu mobile ───────────────────────────────────────────────────────── */
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em um link
  menu.querySelectorAll('.lnk').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

/* ── Filtro de projetos ─────────────────────────────────────────────────── */
const filters  = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    // Atualiza botão ativo
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const cat = btn.dataset.filter;

    projects.forEach(proj => {
      if (cat === 'all' || proj.dataset.category === cat) {
        proj.classList.remove('is-hidden');
      } else {
        proj.classList.add('is-hidden');
      }
    });
  });
});

/* ── Ano dinâmico no footer ─────────────────────────────────────────────── */
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();
