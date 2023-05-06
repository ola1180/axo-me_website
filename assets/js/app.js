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