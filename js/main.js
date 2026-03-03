/* ======================================================
   THE PUP-UP PAWTY — main.js
   ====================================================== */

// --- Sticky header shadow on scroll ---
const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// --- Mobile nav toggle ---
const burgers = document.querySelectorAll('.header-burger-btn');
const menu = document.querySelector('.header-menu');

function openMenu() {
  document.body.classList.add('header--menu-open');
  burgers.forEach(btn => {
    btn.setAttribute('aria-expanded', 'true');
    btn.querySelector('.js-header-burger-open-title')?.setAttribute('hidden', '');
    btn.querySelector('.js-header-burger-close-title')?.removeAttribute('hidden');
  });
}

function closeMenu() {
  document.body.classList.remove('header--menu-open');
  burgers.forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelector('.js-header-burger-open-title')?.removeAttribute('hidden');
    btn.querySelector('.js-header-burger-close-title')?.setAttribute('hidden', '');
  });
}

burgers.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.contains('header--menu-open') ? closeMenu() : openMenu();
  });
});

// Close when a nav link inside the overlay is clicked
menu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// --- Contact form ---
const form = document.querySelector('.contact-form');
const successMsg = document.querySelector('.form-success');

form?.addEventListener('submit', async (e) => {
  const action = form.getAttribute('action');

  // If no real Formspree endpoint is set yet, fall back to mailto
  if (!action || action.includes('xlgwqewb')) {
    e.preventDefault();
    const data = new FormData(form);
    const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:hello@pupuppawty.com?subject=Paw-ty Inquiry&body=${encodeURIComponent(body)}`;
    return;
  }

  // Formspree async submit
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const res = await fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.reset();
      successMsg?.removeAttribute('hidden');
      btn.textContent = 'Sent!';
    } else {
      throw new Error('Server error');
    }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Send';
    alert('Something went wrong. Please email us directly at hello@pupuppawty.com');
  }
});
