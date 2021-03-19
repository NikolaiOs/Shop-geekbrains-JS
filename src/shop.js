'use strict'

import Button from './buttons'
import GoodItem from './gooditem'
import Cart from './cart'
import FeedBackForm from './feedbackform'
import './style.css'

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

const cartElem = new Cart()

new List(cartElem)

const feedBack = new FeedBackForm('feedBack')
