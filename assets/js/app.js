// Global
    
    // circle cursor

let circleCursor = document.querySelector('.circle-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    circleCursor.style.left = `${x}px`;
    circleCursor.style.top = `${y}px`;

}


let links = Array.from(document.querySelectorAll('a'));

links.forEach((link)=> {
    link.addEventListener('mouseover', () => {
        circleCursor.classList.add('grow')
    })

    link.addEventListener('mouseleave', () => {
        circleCursor.classList.remove('grow')
    })
})

    // scroll arrow 

document.addEventListener('scroll', () => {
    const arrow = document.querySelector('.up-arrow');
    
    if (window.scrollY > 400) {
        arrow.classList.add('visible-scroll');
    } else {
        arrow.classList.remove('visible-scroll');
    }
    });


    //pop up video
const btn = document.querySelector('.watch-button');
const videoContainer = document.querySelector('.popup-video');
const close = document.querySelector('.close-btn');

btn.addEventListener('click', () => {
 let iframe = document.createElement('iframe');
 iframe.setAttribute("src","https://streamable.com/e/shil2?autoplay=1" );
 iframe.setAttribute("frameborder", "0");
 iframe.setAttribute("allow", "autoplay");
 iframe.classList.add('iframe-video');

 videoContainer.append(iframe);
 videoContainer.classList.add('show');
});

close.addEventListener('click', () => {
    const iframeVideo = document.querySelector('.iframe-video');
    iframeVideo.remove();
    videoContainer.classList.remove('show');
} );

// Navigation 

    //scroll color change

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 0) {
        nav.classList.add('color-scroll');
    } else {
        nav.classList.remove('color-scroll');
    }
    });

    // hamburger menu


let hamburgerButton = document.querySelector(".hamburger")
let navigation = document.querySelector('.nav-menu')

hamburgerButton.addEventListener("click", () => {
hamburgerButton.classList.toggle("active")
navigation.classList.toggle("open")
})

let navigationLinks = document.querySelectorAll('.nav-menu li a')

navigationLinks.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerButton.classList.remove('active')
        navigation.classList.remove('open')
    })
})

