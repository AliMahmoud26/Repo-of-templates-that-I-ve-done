const closeIcon = document.querySelector('.close i');
const listItems = document.querySelector('nav ul');
const navIcon = document.querySelector('nav .nav-icon');

navIcon.addEventListener('click', () => {
    listItems.classList.add('show');
})

closeIcon.addEventListener('click', () => {
    listItems.classList.remove('show');
});