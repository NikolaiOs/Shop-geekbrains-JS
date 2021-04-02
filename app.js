// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   let body = null;

//   try {
//     const extension = req.url.split('.')[1];
//     const isSvg = extension === 'svg';

//     if (isSvg) {
//       res.setHeader('Content-Type', 'image/svg+xml');
//     }

//     body = fs.readFileSync(`./${req.url}`)
//   } catch (err) {
//     body = fs.readFileSync(`index.html`)
//   }
//   res.end(body)
// });

// const port = process.env.PORT || 3000;

// server.listen(port);

// console.log(`Server started on port ${port}!`);



const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./'));
app.use(bodyParser.json());

app.get('/itemsList', (req, res) => {
  // const page = req.params.page;
  fs.readFile(`./database/data.json`, 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/cartList', (req, res) => {
  fs.readFile('./database/cart.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/itemsCart', (req, res) => {
  const fileCart = './database/cart.json'
  fs.readFile(fileCart, 'utf8', (err, data) => {
    const cart = JSON.parse(data || {})
    const amountOfData = Object.keys(cart).length
    const newID = amountOfData + 1;
    const newCartItem = req.body

    cart[newID] = newCartItem

    fs.writeFile(fileCart, JSON.stringify(cart), (err) => {
      if (err) {
        console.log(err)
      }
      res.send(cart)
    })
  })

})

app.listen(4000, () => {
  console.log('Server started');
});
