const primaryNav = document.querySelector('#navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


navToggle.addEventListener('click', () =>{
  const visibility = primaryNav.getAttribute('data-visible')
 
  if(visibility === 'false'){
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  }

  else{
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }




});



// const navLink = document.querySelector('#navLink')

// navLink.addEventListener('click', function(){
//   primaryNav.setAttribute('data-visible', false)
//   navToggle.setAttribute('aria-expanded', false)

// })


//Close navbar once link is selected
const navLink = document.querySelectorAll('#navLink')

navLink.forEach(function(item){
  item.addEventListener('click', function(){
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  

  })


})

