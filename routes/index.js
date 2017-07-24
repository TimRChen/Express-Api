var express = require('express');
var router = express.Router();


router.all('*', function(req, res, next) {  
    //设置允许 http://localhost:8080 这个域响应  
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept,X-Requested-With");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
