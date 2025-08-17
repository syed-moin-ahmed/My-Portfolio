// optional subtle background particles
const background = document.querySelector('.background');

for (let i = 0; i < 20; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.animationDuration = 3 + Math.random() * 2 + 's';
  background.appendChild(star);
}
