const errorMsg = document.querySelector('.error-msg')
const btnInput = document.querySelector('.btn__input')
const emailInputError = document.querySelector('.email__input')

btnInput.addEventListener('click', (e) => {
  const validate = document.querySelector('input').validity.valid

  if (!validate) {
    errorMsg.classList.add('error-msg-hidden')
    emailInputError.classList.add('email__input--error')
  } else {
    errorMsg.classList.remove('error-msg-hidden')
    emailInputError.classList.remove('email__input--error')
  }
})
