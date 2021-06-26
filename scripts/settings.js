const toggle = document.getElementById('toggle');
const reset = document.getElementById('reset');

window.onload = () => {
  if (localStorage.getItem('theme')) {
    toggle.checked = localStorage.getItem('theme') == 'dark';
  }
};

reset.onclick = () => {
  localStorage.removeItem('questions');
  location.href = '/';
};

toggle.onchange = (e) => {
  if (!e.target.checked) {
    document.querySelector('body').classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.querySelector('body').classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
