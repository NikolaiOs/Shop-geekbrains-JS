// список товаров
class List {
  _items = []

  constructor(cartElem) {
    this.fetchGoods()
      .then(res => {
        return res.json()
      })
      .then(data => {
        const goods = data.data.map(item => {
          return new GoodItem(item, cartElem)
        })
        this._items = this._items.concat(goods)
        this.rendor()
      })
  }

  // получает товар
  fetchGoods() {
    let url = `${document.location.protocol}//${document.location.host}/database/data.json`
    return fetch(url);
  }

  // отображает товар
  rendor() {
    this._items.forEach(Good => {
      Good.rendor()
    })
  }
}

// карточки товаров
class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _cartElem = null

  constructor({
    name,
    price,
    img
  }, cartElem) {
    this._name = name
    this._price = price
    this._img = img
    this._cartElem = cartElem
  }

  addToCart() {
    this._cartElem.add({
      img: this._img,
      name: this._name,
      price: this._price
    })
  }

  // отобразить карточки
  rendor() {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
      Товар: ${this._name} = ${this._price}
      <img src="${this._img}"/>
      `
      const btn = new Button('Купить', this.addToCart.bind(this))
      btn.render(block)
      placeToRender.appendChild(block)
    }
  }
}

class Cart {
  _cartItems = []

  constructor() {
    this.render()
  }

  add(item) {
    this._cartItems.push(new CartList(item))
    this.render()
  }

  render() {
    const block = document.querySelector('.cart')
    if (block) {
      block.innerHTML = '<h2 class="cart-title">Корзина</h2>'
    }
    this._cartItems.forEach(Good => {
      Good.render()
    })
  }
}

class CartList {
  _name = ''
  _price = 0
  _img = 0

  constructor({
    name,
    price,
    img
  }) {
    this._name = name
    this._price = price
    this._img = img
  }

  render() {
    const placeToRender = document.querySelector('.cart')
    const block = document.createElement('div')
    block.classList.add('cart-items')
    block.innerHTML = `<img src="${this._img}"> ${this._name} <p>Цена: ${this._price}</p>`
    placeToRender.appendChild(block)
  }
}

class FeedBackForm {
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

const cartElem = new Cart()

new List(cartElem)

const feedBack = new FeedBackForm('feedBack')
