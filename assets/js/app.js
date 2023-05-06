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

  //scroll color change

  let menuLinks = document.querySelectorAll('.nav-item')
  
  menuLinks.forEach(item => {
      item.addEventListener ('click' , (event) => {
  
          if(!item.classList.contains('active')) {
              menuLinks.forEach(item => item.classList.remove('active'))
              item.classList.add('active')
  
          } 
      })
  })