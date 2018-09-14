let navBar = document.querySelector(".dark-nav");

function handleNav() {
    if (navBar.className === "dark-nav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "dark-nav";
    }
}

navBar.addEventListener('click', handleNav);