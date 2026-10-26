async function loadPageSections() {
  const placeholders = document.querySelectorAll('[data-include]');

  await Promise.all(Array.from(placeholders, async (placeholder) => {
    const response = await fetch(placeholder.dataset.include);

    if (!response.ok) {
      throw new Error(`Kunde inte läsa ${placeholder.dataset.include}`);
    }

    placeholder.outerHTML = await response.text();
  }));
}

function activateNavigation() {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#nav-links');

  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));

  document.querySelector('#year').textContent = new Date().getFullYear();
}

loadPageSections()
  .then(activateNavigation)
  .catch((error) => console.error('Webbplatsens HTML-delar kunde inte läsas in.', error));
