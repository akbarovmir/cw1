const body = document.querySelector('body');

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
} else {
  const theme = localStorage.getItem('theme');
  body.classList.add(theme == 'dark' && 'dark');
}
