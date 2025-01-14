const imageContainer = document.querySelector('.imagem-container');
const image = document.querySelector('.zoom');

imageContainer.addEventListener('mousemove', (e) => {
  const containerRect = imageContainer.getBoundingClientRect();
  const x = e.clientX - containerRect.left;
  const y = e.clientY - containerRect.top;

  // Calculando o movimento e zoom baseado na posição do mouse
  const moveX = (x / containerRect.width) * 100;
  const moveY = (y / containerRect.height) * 100;

  // Aplica a transformação de zoom e movimento
  image.style.transform = `scale(1.2) translate(-${moveX * 0.5}%, -${moveY * 0.5}%)`;
});
imageContainer.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1) translate(0, 0)'
})


let indice = 0

function moverSlide(direcao) {
  const slides = document.querySelectorAll('.slide')
  const totalSlides = slides.length

  indice += direcao

  if (indice < 0) {
    indice = totalSlides - 1
  } else if (indice >= totalSlides) {
    indice = 0
  }

  const slideWidth = slides[0].clientWidth
  const slidesContainer = document.querySelector('.slides')

  slidesContainer.style.transform = `translateX(-${indice * slideWidth}px)`
}