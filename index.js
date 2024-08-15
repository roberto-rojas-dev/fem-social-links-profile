const toggleButton = document.getElementById('toggle-dark-mode')
const body = document.querySelector('body')

// I set the dark mode as default
toggleButton.setAttribute('aria-checked', 'true')
body.classList.add('dark-mode')


toggleButton.addEventListener('click', () => {
  const isChecked = toggleButton.getAttribute('aria-checked')
  if (isChecked === 'true'){
    toggleButton.setAttribute('aria-checked', 'false')
    body.classList.remove('dark-mode')
  } else {
    toggleButton.setAttribute('aria-checked', 'true')
    body.classList.add('dark-mode')
  }
})