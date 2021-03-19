'use strict'

export default class FeedBackForm {
  _form = ''

  constructor(form) {
    this._form = form
    this.renderForm()
  }

  validation(data, type) {
    switch (type) {
      case 'name':
        const reName = /^(\p{Alpha})+$/gu
        if (reName.test(data)) {
          console.log('Name is valid!');
        } else {
          alert('Имя содержит только буквы')
          console.log('Name is not valid!');
        }
        break;
      case 'phone':
        const rePhone = /^\+7\(\d{3}\)\d{3}-\d{4}$/g
        if (rePhone.test(data)) {
          console.log('Phone is valid!');
        } else {
          alert('Телефон имеет вид +7(000)000-0000')
          console.log('Phone is not valid!');
        }
        break;
      case 'email':
        const reMail = /^([a-z0-9\.-]+)@([a-z0-9\.-]+)\.([a-z\.]{2,6})$/g
        if (reMail.test(data)) {
          console.log('Email is valid!');
        } else {
          alert('E-mail имеет вид mymail@mail.ru, или my.mail@gmail.com')
          console.log('Email is not valid!');
        }
        break;
    }
  }

  renderForm() {
    const placeToRender = document.querySelector('.feedBack')
    if (placeToRender) {
      const title = document.createElement('h2')
      title.innerHTML = `<h2 class="cart-title">Обратная связь</h2>`
      placeToRender.appendChild(title)
      const block = document.createElement('form')
      block.classList.add('feedBackForm')
      block.setAttribute('action', '#')
      block.innerHTML = `
         <p class="text-form">Имя: <input onchange=\"${this._form}.validation(this.value, \'name\')" class="registration-form" type="text" name="login" placeholder="Коля" minlength="4" maxlength="35" required></p>
         <p class="text-form">Телефон: <input onchange=\"${this._form}.validation(this.value, \'phone\')" class="registration-form" type="tel" name="tel" placeholder="+7(444)333-2222" minlength="12" maxlength="35" required></p>
         <p class="text-form">Введите почту: <input onchange=\"${this._form}.validation(this.value, \'email\')" class="registration-form" type="text" placeholder="Email" minlength="11" maxlength="35" required></p>
         <p><input type="submit" value="Отправить"></p>
      `
      placeToRender.appendChild(block)
    }
  }
}
