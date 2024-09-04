// script.js

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on load
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeToggle.textContent = '🌙';
}

// Toggle theme and save user preference
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  if (body.classList.contains('light-theme')) {
    themeToggle.textContent = '🌙'; // Moon icon for light theme
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '☀️'; // Sun icon for dark theme
    localStorage.setItem('theme', 'dark');
  }
});
