const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  const html = document.querySelector('html');
  const currentTheme = html.getAttribute('theme');

  if (currentTheme === 'light') {
    html.setAttribute('theme', 'dark');
  } else {
    html.setAttribute('theme', 'light');
  }
});
