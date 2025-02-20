import './scss/main.scss'

const steps = document.querySelectorAll(".circle")
const connect_lines = document.querySelectorAll(".connect-line")
const step_texts = document.querySelectorAll(".step-text")
const formParts = document.querySelectorAll(".form-part")
const preBtn = document.querySelector('.btn-previous')
const nextBtn = document.querySelector('.btn-next')
const btnControl = document.querySelector('.control-btn')
const cart = document.querySelector('.cart')
const good_1_amount = document.querySelector('.good-1-amount-num')
const good_2_amount = document.querySelector('.good-2-amount-num')
const delivery_fee = document.querySelector('.delivery-fee-num')
const total_fee = document.querySelector('.total-fee-num')
const form_part_2 = document.querySelector(".form-part-2")
const dark_theme_btn = document.querySelector(".dark-theme-btn")
const body = document.querySelector('body')


let nowStep = 0


function stepControl(event) {
  event.preventDefault()
  if ((event.target.matches(".btn-next")) && (nowStep === 0)) {
    steps[nowStep].classList.remove('active')
    steps[nowStep].classList.add('checked')
    steps[nowStep + 1].classList.add('active')
    step_texts[nowStep].classList.remove('active')
    step_texts[nowStep].classList.add('checked')
    step_texts[nowStep + 1].classList.add('active')
    connect_lines[nowStep].classList.add('checked')
    formParts[nowStep].classList.add('d-none')
    formParts[nowStep + 1].classList.remove('d-none')
    preBtn.classList.remove('d-none')
    nowStep++
  }
  else if ((event.target.matches(".btn-next")) && (nowStep === 1)) {
    steps[nowStep].classList.remove('active')
    steps[nowStep].classList.add('checked')
    steps[nowStep + 1].classList.add('active')
    step_texts[nowStep].classList.remove('active')
    step_texts[nowStep].classList.add('checked')
    step_texts[nowStep + 1].classList.add('active')
    connect_lines[nowStep].classList.add('checked')
    formParts[nowStep].classList.add('d-none')
    formParts[nowStep + 1].classList.remove('d-none')
    nowStep++
    nextBtn.innerText = "確認下單"
  }
  else if ((event.target.matches(".btn-previous")) && (nowStep === 1)) {
    steps[nowStep].classList.remove('active')
    steps[nowStep - 1].classList.remove('checked')
    steps[nowStep - 1].classList.add('active')
    step_texts[nowStep].classList.remove('active')
    step_texts[nowStep - 1].classList.remove('checked')
    step_texts[nowStep - 1].classList.add('active')
    connect_lines[nowStep - 1].classList.remove('checked')
    formParts[nowStep].classList.add('d-none')
    formParts[nowStep - 1].classList.remove('d-none')
    nowStep--
    preBtn.classList.add('d-none')
  }
  else if ((event.target.matches(".btn-previous")) && (nowStep === 2)) {
    steps[nowStep].classList.remove('active')
    steps[nowStep - 1].classList.remove('checked')
    steps[nowStep - 1].classList.add('active')
    step_texts[nowStep].classList.remove('active')
    step_texts[nowStep - 1].classList.remove('checked')
    step_texts[nowStep - 1].classList.add('active')
    connect_lines[nowStep - 1].classList.remove('checked')
    formParts[nowStep].classList.add('d-none')
    formParts[nowStep - 1].classList.remove('d-none')
    nowStep--
    nextBtn.innerText = '下一步 →'
  }
}

function refreshAllFee() {
  const delivery_fee_checked = document.querySelector(".delivery-type-radio:checked").value
  const allFee = (3999 * good_1_amount.innerText) + (1299 * good_2_amount.innerText) + (Number(delivery_fee_checked))
  total_fee.innerText = "$ " + allFee
}

function setGoodsAmount(event) {
  if (event.target.matches(".btn-plus")) {
    event.target.previousElementSibling.innerText++
  }
  else if ((event.target.matches('.btn-minus')) && (event.target.nextElementSibling.innerText > 0)) {
    event.target.nextElementSibling.innerText--
  }
  refreshAllFee()
}

form_part_2.addEventListener('click', function (event) {
  const delivery_fee_checked = document.querySelector(".delivery-type-radio:checked").value
  const nowSelect = document.querySelector(".selected")
  if (event.target.matches('.delivery-type-radio')) {
    if (delivery_fee_checked == 0) {
      delivery_fee.innerText = "免費"
    }
    else {
      delivery_fee.innerText = "$ " + delivery_fee_checked
    }
    nowSelect.classList.remove('selected')
    event.target.parentElement.classList.add('selected')
    refreshAllFee()
  }
})

btnControl.addEventListener('click', stepControl)
cart.addEventListener('click', setGoodsAmount)

dark_theme_btn.addEventListener('click', function(){
  body.classList.toggle('dark')
})