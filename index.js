var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products =[
    {
    name:"Men Walking Shoe",
    model:" GREY",
    amount:"₹699",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4VD1BARhRrfS6izBXzNf6ixTrvl2nd4qcQ&usqp=CAU"
  },
  {
    name:"Mountain Bike",
    model:"Rock Rider G-15",
    amount:"₹9,999",
    image:"data:image/jpeg;base64,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"
  },
  {
    name:"Men Hiking Shoes",
    model:" Y-7 Water Proof",
    amount:"₹3,999",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm2Q_ciEHnpnMY84QWo_ULsoRxA6RlB8kow&usqp=CAU"
  },
  {
    name:"Sporty Bike",
    model:"Yanko Design",
    amount:"₹5,999",
    image:"data:image/jpeg;base64,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"
  },
  ]
  
if(req.session.login){
  res.render('index', { products});
}else{
  res.redirect("/")
}
});

module.exports = router;