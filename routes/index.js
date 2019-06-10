var express = require('express');
var router = express.Router();


const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

const PETS = [
    {category: 'Dogs', price: '$49.99', stocked: true, name: 'Rotwilder'},
    {category: 'Dogs', price: '$9.99', stocked: true, name: 'German Shepard'},
    {category: 'Dogs', price: '$29.99', stocked: false, name: 'Dalmation'},
    {category: 'Cats', price: '$99.99', stocked: true, name: 'Persian'},
    {category: 'Cats', price: '$399.99', stocked: false, name: 'Russian Blue 5'},
    {category: 'Cats', price: '$199.99', stocked: true, name: 'Scotish Fold'}
  ];  

router.get('/' , function (req , res , next)
{
    res.render('index', {});
});


router.get('/api/productlist', function(req , res , next){
  res.json(PRODUCTS);    
})

router.get('/api/petlist', function(req , res , next){
  res.json(PETS);    
})

module.exports = router;