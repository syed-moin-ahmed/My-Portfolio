
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
