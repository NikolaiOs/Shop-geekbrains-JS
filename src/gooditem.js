'use strict'

import Button from './buttons'

// карточки товаров
export default class GoodItem {
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
