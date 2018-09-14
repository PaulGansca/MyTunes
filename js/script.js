let hamburger = document.querySelector(".nav-toggle-label");

console.log(hamburger)

function handleNav() {
    hamburger.classList.toggle('close');
}

hamburger.addEventListener('click', handleNav);