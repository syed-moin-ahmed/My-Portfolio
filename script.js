// Dark mode toggle + smooth scroll
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setMode(dark){
  if(dark){
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️';
    localStorage.setItem('dark','1');
  } else {
    document.documentElement.classList.remove('dark');
    toggle.textContent = '🌙';
    localStorage.removeItem('dark');
  }
}

// initialize from preference
const preferDark = localStorage.getItem('dark') === '1';
setMode(preferDark);

toggle.addEventListener('click', ()=>{
  setMode(!document.documentElement.classList.contains('dark'));
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});
// Typing effect for tagline
const tagline = document.querySelector('.tagline');
const text = "Aspiring AI & ML Engineer • Web Developer • Problem Solver";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
tagline.textContent = "";
typeWriter();

