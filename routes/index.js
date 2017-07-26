var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let dataModel = require('../models/data');
mongoose.connect('mongodb://localhost/temp');


router.all('*', function(req, res, next) {  
  //设置允许 http://localhost:8080 这个域响应  
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept,X-Requested-With");  
  next();
});


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hey' });
});


router.post('/timrchen/mongodb/data/temp', function (req, res, next) {

  if (req.body) {
    console.log(req.body);
  }
    // let _data = new dataModel({
    //     ok: true,
    //     status: 200,
    //     body: 'everything be fine.'
    // });

    // _data.save(function (err, data) {
    //   if (err) return console.error(err);
    // });
  dataModel.find(function (err, datas) {
      if (err) return console.error(err);
      datas.map((data) => {
        res.status(200).json(data);
      })
  });

});


/**
 * 单独充值Q币 mock接口
 */
router.put('/orderProcessor/user/:userId/qq-coin-envelop/:coins', function(req, res, next) {
  
  let Json = {
    "ok": "true",
    "text": "请求成功!"
  };

  res.json(200, Json);
});





module.exports = router;
