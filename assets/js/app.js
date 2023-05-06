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