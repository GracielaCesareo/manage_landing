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

// Validate email form newsletter

const newsEmailForm = document.getElementById('formNewsLetter')
const emailUserNewsLetter = document.getElementById('emailnewsletter')
const expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const alertMessageContainer = document.querySelector('.alert-message');

const validateEmail = (e) => {
  e.preventDefault();

  if(emailUserNewsLetter.value.match(expression)){
    
    alertMessageContainer.innerHTML = ''
    removeError()
    return (true)
  }else{
    alertMessageContainer.style.display = 'block'
    alertMessageContainer.innerHTML = 'Please inserta a valid email'
    return (false)
  }

}

// Removing error from input
const removeError = () => {
  alertMessageContainer.style.display = 'none'
}

newsEmailForm.addEventListener('submit', validateEmail)
emailUserNewsLetter.addEventListener('keyup', removeError)



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