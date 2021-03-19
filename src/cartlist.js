'use strict'

export default class CartList {
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
