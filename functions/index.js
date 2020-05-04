const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

admin.initializeApp(functions.config().firebase);


let db = admin.firestore();


exports.addContact = functions.https.onRequest(async (req, res) => {
  
  var ranNum = Math.floor(Math.random() * 1000000) + 1 ;
  var newDoc = ranNum.toString();
  
  let setDoc = db.collection('contacts').doc(newDoc).set(req.body);
});





app.get('/checkout/:id', async (req, res) => {
  if (req.params.id == 1){
  res.render('checkout',{
    description : "Purse Checkout",
    title: "Purse Checkout",
    product: "So Basic!",
    cost: "10",
    options: ["£12 credit per month.","Early acces to sales","Monthly giveaways"]
  });
  } else if (req.params.id == 2) {
    res.render('checkout',{
      description : "Purse Checkout",
      title: "Purse Checkout",
      product: "The Fashionista",
      cost: "30",
      options: ["£45 credit per month.","Early access to sales and product launches.","Exclusive access to live events and store specials", "Weekly giveaways", "Discount codes for your friends"]
    });

  }
});

app.get('/complete-account', async (req, res) => {
  res.render('complete-account',{
    description : "Sorry, there's been an error with your order",
    title: "Purse",
  });
});

app.get('/', async (req, res) => {
    res.render('index',{
      description : "cred",
      title: "cred",
    });
});


exports.app = functions.https.onRequest(app);


