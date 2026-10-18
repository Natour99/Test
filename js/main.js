// Put the current year in the footer.
document.getElementById('year').textContent = new Date().getFullYear();

// Light / dark mode toggle. The choice is remembered in the browser.
const toggle = document.getElementById('theme-toggle');

function setTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  toggle.textContent = dark ? '☀️' : '🌙';
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
setTheme(savedTheme === 'dark');

toggle.addEventListener('click', () => {
  const dark = !document.documentElement.classList.contains('dark');
  setTheme(dark);
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});

// Contact form: show a thank-you message instead of sending anything.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const result = document.getElementById('form-result');
    result.textContent = `Thanks, ${name}! Your message was received (practice only).`;
    result.hidden = false;
    form.reset();
  });
}
