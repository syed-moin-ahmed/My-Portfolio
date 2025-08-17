const toggle = document.getElementById('theme-toggle');

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

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});

// reveal on scroll
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
  reveals.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add("show");
    }
  })
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
