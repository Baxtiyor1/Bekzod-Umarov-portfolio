const modalBtn = document.querySelector('#header_modal_btn')
const modalList = document.querySelector('#header__modal')
const modalCloseBtn = document.querySelector('#header__modal--close')

modalBtn.addEventListener('click', ()=>{
    modalList.classList.add('header__modal--active')
})
modalCloseBtn.addEventListener('click', ()=>{
    modalList.classList.remove('header__modal--active')
})