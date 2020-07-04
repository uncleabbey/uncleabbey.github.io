const toggleBtn = document.querySelector('.toggler');

const nav = document.querySelector('.navigator');
const header = document.querySelector('header')

//  display form
toggleBtn.onclick = () => {
  if(nav.style.display === 'none') {
    header.classList.add('header')
    nav.style.display = 'block';
} else if(nav.style.display === 'block') {
  header.classList.remove('header')
  nav.style.display = 'none'
} else {
  header.classList.add('header')
  nav.style.display = 'block'
}

};
