'use strict'

import CartList from './cartlist'

export default class Cart {
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
