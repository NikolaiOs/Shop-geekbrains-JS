(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},426:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(705),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,"* {\n  /* outline-width: 1px;\n  outline-style: solid;\n  outline-color: gray; */\n  margin: 0;\n  padding: 0;\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-shop {\n  font-size: 60px;\n  margin-top: 20px;\n}\n\n.goods-list {\n  padding-top: 20px;\n  display: flex;\n}\n\n.cart {}\n\n.cart-title {\n  font-size: 40px;\n  margin-top: 20px;\n}\n\n.feedBackForm {\n  margin-top: 20px;\n}\n",""]);const a=r},379:(e,t,n)=>{var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function o(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=o(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(h)):a.push({identifier:d,updater:f(h,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function h(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,p=0;function f(e,t){var n,i,r;if(t.singleton){var a=p++;n=m||(m=c(t)),i=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=c(t),i=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=o(n[i]);a[r].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=o(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=c}}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class t{constructor(t,n){e(this,"_text",""),e(this,"_callback",null),this._text=t,this._callback=n}onButtonClick(){const e=this._callback;"function"==typeof e&&e()}getTemplate(){const e=document.createElement("button");return e.classList.add("btn"),e}render(e){if(e){const t=this.getTemplate();t.innerHTML=this._text,e.appendChild(t),t.addEventListener("click",(()=>{this.onButtonClick()}))}}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class r{constructor({name:e,price:t,img:n},r){i(this,"_name",""),i(this,"_price",0),i(this,"_img",0),i(this,"_cartElem",null),this._name=e,this._price=t,this._img=n,this._cartElem=r}addToCart(){this._cartElem.add({img:this._img,name:this._name,price:this._price})}rendor(){const e=document.querySelector(".goods-list");if(e){const n=document.createElement("div");n.innerHTML=`\n      Товар: ${this._name} = ${this._price}\n      <img src="${this._img}"/>\n      `,new t("Купить",this.addToCart.bind(this)).render(n),e.appendChild(n)}}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o{constructor({name:e,price:t,img:n}){a(this,"_name",""),a(this,"_price",0),a(this,"_img",0),this._name=e,this._price=t,this._img=n}render(){const e=document.querySelector(".cart"),t=document.createElement("div");t.classList.add("cart-items"),t.innerHTML=`<img src="${this._img}"> ${this._name} <p>Цена: ${this._price}</p>`,e.appendChild(t)}}var s=n(379),c=n.n(s),l=n(426);c()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const d=new class{constructor(){var e,t;t=[],(e="_cartItems")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t,this.render()}add(e){this._cartItems.push(new o(e)),this.render()}render(){const e=document.querySelector(".cart");e&&(e.innerHTML='<h2 class="cart-title">Корзина</h2>'),this._cartItems.forEach((e=>{e.render()}))}};new class{constructor(e){var t,n;n=[],(t="_items")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n,this.fetchGoods().then((e=>e.json())).then((t=>{const n=t.data.map((t=>new r(t,e)));this._items=this._items.concat(n),this.rendor()}))}fetchGoods(){let e=`${document.location.protocol}//${document.location.host}/database/data.json`;return fetch(e)}rendor(){this._items.forEach((e=>{e.rendor()}))}}(d),new class{constructor(e){var t;(t="_form")in this?Object.defineProperty(this,t,{value:"",enumerable:!0,configurable:!0,writable:!0}):this[t]="",this._form=e,this.renderForm()}validation(e,t){switch(t){case"name":/^(\p{Alpha})+$/gu.test(e)?console.log("Name is valid!"):(alert("Имя содержит только буквы"),console.log("Name is not valid!"));break;case"phone":/^\+7\(\d{3}\)\d{3}-\d{4}$/g.test(e)?console.log("Phone is valid!"):(alert("Телефон имеет вид +7(000)000-0000"),console.log("Phone is not valid!"));break;case"email":/^([a-z0-9\.-]+)@([a-z0-9\.-]+)\.([a-z\.]{2,6})$/g.test(e)?console.log("Email is valid!"):(alert("E-mail имеет вид mymail@mail.ru, или my.mail@gmail.com"),console.log("Email is not valid!"))}}renderForm(){const e=document.querySelector(".feedBack");if(e){const t=document.createElement("h2");t.innerHTML='<h2 class="cart-title">Обратная связь</h2>',e.appendChild(t);const n=document.createElement("form");n.classList.add("feedBackForm"),n.setAttribute("action","#"),n.innerHTML=`\n         <p class="text-form">Имя: <input onchange="${this._form}.validation(this.value, 'name')" class="registration-form" type="text" name="login" placeholder="Коля" minlength="4" maxlength="35" required></p>\n         <p class="text-form">Телефон: <input onchange="${this._form}.validation(this.value, 'phone')" class="registration-form" type="tel" name="tel" placeholder="+7(444)333-2222" minlength="12" maxlength="35" required></p>\n         <p class="text-form">Введите почту: <input onchange="${this._form}.validation(this.value, 'email')" class="registration-form" type="text" placeholder="Email" minlength="11" maxlength="35" required></p>\n         <p><input type="submit" value="Отправить"></p>\n      `,e.appendChild(n)}}}("feedBack")})()})();