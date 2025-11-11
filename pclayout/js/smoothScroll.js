const navbar = document.querySelector ('.header__nav')
const links = navbar.querySelectorAll ('a')

links.forEach ((link) => {
    link.addEventListener ('click', (event) => {
     event.preventDefault ()
     console.log (seamless);

     const section = document.querySelector (link.getAttribute('href'))

     if (section) {
           seamless.scrollIntoView(document.querySelector("#target"), {
        behavior: "smooth",
        block: "start",
        inline: "center",
    })
     }
    })
})

