/* ============ header ============ */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')

/* ============ carrossel ============ */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* ============ botões ============ */
function signUpRedirect() {
    window.location.href = "cadastro.html";
}

function passwordRedirect() {
    window.location.href = "fgtpassword.html";
}

function extRedirect() {
    window.location.href = "extensao.html";
}

function projDispRedirect() {
    window.location.href = "projetos-disponiveis.html";
}

function projAndRedirect() {
    window.location.href = "projetos-em-andamento.html";
}

function projConclRedirect() {
    window.location.href = "projetos-concluidos.html";
}

function newsRedirect() {
    window.location.href = "noticias.html";
}

function projDispExampleRedirect() {
    window.location.href = "proj-disp.html";
}

function projAndExampleRedirect() {
    window.location.href = "proj-andamento.html";
}

function projAndExampleDonationRedirect() {
    window.location.href = "proj-andamento-doacao.html";
}

function projConclExampleRedirect() {
    window.location.href = "proj-concl.html";
}

function donationRedirect() {
    window.location.href = "doacao.html"
}