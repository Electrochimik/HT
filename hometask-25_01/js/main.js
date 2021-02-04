document.querySelector('.nav_header_button_mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
}