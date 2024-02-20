// mobile nav

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon =  document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
})

//Scroll navbar
// Ambil elemen navbar
const navbar = document.getElementById('navbar');

// Tambahkan event listener untuk menangani perubahan warna navbar saat di-scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

//Scroll animation kata-kata
// Membagi teks menjadi kata-kata terpisah
const textElement = document.getElementById('animatedText');
const words = Array.from(textElement.childNodes).filter(node => node.nodeType === Node.TEXT_NODE || node.nodeName === 'SPAN');

// Menerapkan efek scroll reveal pada setiap kata
let newText = '';
words.forEach(word => {
  if (word.nodeType === Node.TEXT_NODE) {
    const wordText = word.textContent.split(/\s+/).filter(Boolean);
    wordText.forEach(w => {
      newText += `<span class="word">${w} </span>`;
    });
  } else {
    const span = document.createElement('span');
    span.className = `word ${word.className}`;
    span.innerText = word.innerText;
    newText += span.outerHTML;
  }
});
textElement.innerHTML = newText.trim();

// Inisialisasi ScrollReveal
ScrollReveal().reveal('.word', {
  delay: 300,
  distance: '50px',
  origin: 'bottom',
  opacity: 0,
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 200, // Efek akan diterapkan per kata
});

document.addEventListener("DOMContentLoaded", function() {
  const contactButton = document.getElementById('contact-button');
  const modal = document.getElementById('contact-modal');

  contactButton.addEventListener('click', function() {
      // Tampilkan modal
      modal.classList.remove('hidden');
      modal.classList.add('block');
  });

  // Sembunyikan modal saat tombol close di klik
  const closeButton = document.getElementById('modal-close-button');
  closeButton.addEventListener('click', function() {
      modal.classList.remove('block');
      modal.classList.add('hidden');
  });
});