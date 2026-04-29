/**
 * INTEGR8 — main.js
 * Vanilla JS para: navbar scroll, tabs, accordion FAQ,
 * stats counter animation, scroll horizontal, smooth scroll.
 * Sem dependências externas.
 */

'use strict';

/* ============================================================
   1. NAVBAR — Transparente → Opaco ao rolar
   ============================================================ */

const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 60;

  const updateNavbar = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Checar estado inicial
  updateNavbar();

  // Listener com throttle simples
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
};

/* ============================================================
   2. NAVBAR — Mobile hamburger menu
   ============================================================ */

const initMobileMenu = () => {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fechar ao clicar em link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Fechar ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
};

/* ============================================================
   3. TABS — Treino / Nutrição / Monitoramento
   ============================================================ */

const initTabs = () => {
  const tabsSection = document.getElementById('tabs');
  if (!tabsSection) return;

  const tabButtons = tabsSection.querySelectorAll('[role="tab"]');
  const tabPanels = tabsSection.querySelectorAll('[role="tabpanel"]');
  if (!tabButtons.length || !tabPanels.length) return;

  const activateTab = (targetBtn) => {
    // Desativar todos
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
    });

    // Ativar o selecionado
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');

    const targetPanelId = targetBtn.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.add('active');
      targetPanel.setAttribute('aria-hidden', 'false');
    }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn));

    // Navegação por teclado
    btn.addEventListener('keydown', (e) => {
      const tabs = Array.from(tabButtons);
      const currentIndex = tabs.indexOf(btn);

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % tabs.length;
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        tabs[prevIndex].focus();
        activateTab(tabs[prevIndex]);
      }
    });
  });

  // Ativar primeira tab por padrão
  if (tabButtons[0]) activateTab(tabButtons[0]);
};

/* ============================================================
   4. FAQ — Accordion
   ============================================================ */

const initAccordion = () => {
  const faqItems = document.querySelectorAll('.faq__item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fechar todos
      faqItems.forEach(i => {
        i.classList.remove('open');
        const q = i.querySelector('.faq__question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      // Abrir o clicado (se não estava aberto)
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
};

/* ============================================================
   5. STATS — Counter animation com Intersection Observer
   ============================================================ */

const initStatsAnimation = () => {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const statNumbers = statsSection.querySelectorAll('[data-target]');
  if (!statNumbers.length) return;

  // Respeitar preferência de movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCounter = (element, target, duration = 2000) => {
    if (prefersReducedMotion) {
      element.textContent = target.toLocaleString('pt-BR');
      return;
    }

    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);

      element.textContent = current.toLocaleString('pt-BR');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString('pt-BR');
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (!isNaN(target)) {
              animateCounter(el, target);
            }
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection);
};

/* ============================================================
   6. SMOOTH SCROLL — Para links âncora da navbar
   ============================================================ */

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 72;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
};

/* ============================================================
   7. INIT — Quando DOM estiver pronto
   ============================================================ */

const init = () => {
  initNavbar();
  initMobileMenu();
  initTabs();
  initAccordion();
  initStatsAnimation();
  initSmoothScroll();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
