var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// Scroll button

let btn = document.querySelector('.scroll');

window.onscroll = function () {
    if(window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

btn.addEventListener('click', () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
})
}
