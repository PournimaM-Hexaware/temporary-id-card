var express = require('express');
var router = express.Router();
var methods = require('../handlers/method.js');
var path = require('path');
var morgan = require('morgan');

//Package Dependencies
var response = new methods()

router.get('/', function(req, res) {
  res.render('index');
  });

  router.get('/getdata',(req,res)=>{
    res.render('index_old')
  })

  router.post('/enroll',function(req, res) {
    response.enrollfunction(req,res)
    })  //call enroll function 
 
  //Post the data 
  router.post('/upload',function(req, res) {
    response.recognizeFunction(req,res)
  })//call recognize function

  router.post('/detrain',function(req, res) {
    response.detrainFunction(req,res)
  })//call detrain function

  router.post('/response',function(req, res) {
    response.giveResponse(req,res)
  })// call response function

  router.post('/fillData',function(req, res) {
    response.fillUserData(req,res)
  })//call filldata function



module.exports = router;