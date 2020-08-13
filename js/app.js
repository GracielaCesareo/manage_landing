const iconMenuMobile = document.querySelector('.navbar__mobileicon a')
const menuMobileCont = document.querySelector('.navbar__menu ul')
const bodyElement    = document.body

// Settings for menu mobile
const responsiveMenuOpenClose = () => {

    let backdropMenu = document.createElement('div');
    backdropMenu.className = 'backdrop';
    let backdropMenuEl = document.querySelector('.backdrop')

    if (iconMenuMobile.classList.contains('--active')){
        iconMenuMobile.classList.remove('--active')
        menuMobileCont.style.display = "none"
        backdropMenuEl.outerHTML = "";
    }else{
        iconMenuMobile.classList.add('--active')
        menuMobileCont.style.display = "flex"
        bodyElement.appendChild(backdropMenu)
    }

    return

}

iconMenuMobile.addEventListener('click', responsiveMenuOpenClose)

    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      breakpoints:{
        600: {
          perView: 1
        }
      }
    }).mount()