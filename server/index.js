const express = require('express');
let app = express();
const path = require('path');
const axios = require("axios");
require('dotenv').config();
app.use(express.static(path.join(__dirname, '../public')));

var result = {};
app.get('/products/:product_id', function(req, res) {
  var id = req.params.product_id;
  //axios get
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${id}`, {
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  })
    .then((body) => {
      return body.data;
    }).then((productInfo) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${id}/styles`, {
        headers: {
          'Authorization': process.env.API_TOKEN
        }
      }).then((body) => {
        productInfo.styles = (JSON.parse(JSON.stringify(body.data.results)));
        res.send(productInfo);
      }).catch((e) => { console.log(e);});


    });
});





// app.post('/repos', function (req, res) {
//   console.log(req);
//   console.log(req.body);
//   console.log(req.data);
//   console.log(req.data.username);
//   console.log('app has recieved get request');
//   res.send({data: 'fake data'});

// });
// URL: String,
// owner: {
//   login: String,
//   id: Integer,
//   },
// description: String,
// forks_count: Integer
// app.get('/', function (req, res) {
//   res.render('main.js', {});
// });

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

