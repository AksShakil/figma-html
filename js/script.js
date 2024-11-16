
const scrollTotop = document.querySelector('.logo');
scrollTotop.addEventListener("click",smoothScroll);
function smoothScroll(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}