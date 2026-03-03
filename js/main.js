/* ======================================================
   THE PUP-UP PAWTY — main.js
   ====================================================== */

// --- Sticky header shadow on scroll ---
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// --- Mobile nav toggle ---
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggle?.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('is-open');
  navLinks.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// --- Contact form ---
const form = document.querySelector('.contact-form');
const successMsg = document.querySelector('.form-success');

form?.addEventListener('submit', async (e) => {
  const action = form.getAttribute('action');

  // If no real Formspree endpoint is set yet, fall back to mailto
  if (!action || action.includes('YOUR_FORM_ID')) {
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
