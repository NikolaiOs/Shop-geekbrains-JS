// список товаров
class List {
  _items = []

  constructor(CartElem) {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item, CartElem)
    })
    this._items = goods
    this.rendor()
  }

  // получает товар
  fetchGoods() {
    return [{
        name: 'Trousers',
        price: 39000,
        img: './images/Trousers.jpg'
      },
      {
        name: 'Boots',
        price: 14000,
        img: './images/Boots.jpg'
      },
      {
        name: 'Jacket',
        price: 59000,
        img: './images/Jacket.jpg'
      },
    ]
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
  _CartElem = null

  constructor({
    name,
    price,
    img
  }, CartElem) {
    this._name = name
    this._price = price
    this._img = img
    this._CartElem = CartElem
  }

  addToCart() {
    this._CartElem.add(this)
    console.log('sddsdsdsdsdsd', this._name)
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
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.render(block)

      placeToRender.appendChild(block)
    }
  }
}




class Cart {
  _cartItems = []

  add() {
    new GoodItem()
  }

  rendor() {
    this._cartItems.forEach(Good => {
      Good.rendor()
    })
  }
}


class CartList {
  rendor() {
    const placeToRenderCart = document.querySelector('.cart')
    if (placeToRenderCart) {
      const blockCart = document.createElement('div')
      blockCart.innerHTML = `
      <img src="${this._img}"/>
      Товар: ${this._name} = ${this._price}
      `
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.render(block)

      placeToRenderCart.appendChild(blockCart)
    }
  }
}


const CartElem = new Cart()


new List(CartElem)
new Cart()
