let links = document.querySelectorAll('a');
let end = document.getElementById('gift-cards');

//Smooth Scroll
links.forEach(link => link.addEventListener('click', (event) => {
    //prevents default anchor link behaviour
    event.preventDefault();
    let destination;
    //check if element redirects to top of page or specific section
    if(link.getAttribute('href') !== '#') {
        destination = document.querySelector(link.getAttribute('href'));
    } else {
        destination = document.querySelector("#home");
    }
    destination.scrollIntoView({
        behavior: 'smooth'
    });
    console.log("jump smooth");
}));
