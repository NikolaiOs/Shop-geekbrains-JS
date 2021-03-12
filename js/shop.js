// список товаров
class List {
  _items = []

  constructor(cartElem) {
    // let goods = this.fetchGoods()
    // goods = goods.map(item => {
    //   return new GoodItem(item, cartElem)
    // })
    // this._items = goods
    // this.rendor()
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
    let url = `${document.location.protocol}//${document.location.host}/database/data${List.instanceCount++}.json`
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

const cartElem = new Cart()

new List(cartElem)
