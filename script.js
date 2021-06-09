document.querySelectorAll('.save').forEach(item => {
  item.addEventListener('click', () => {
    if(!item.classList.contains('save-filled')) {
      item.classList.add('save-filled')
    } else {
      item.classList.remove('save-filled')
    }
  })
})

const options = document.querySelector('.search-options');
const menu = document.querySelector('.menu')

options.addEventListener('click', () => {
  if(menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
})