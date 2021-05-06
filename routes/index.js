var express = require('express');
var router = express.Router();
var fs=require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/write', function(req, res, next) {
  fs.writeFile('./message.txt', req.query.msg,function(err){
    if(err) 
    res.send('更新失败');
    else res.send('更新成功');
});
});

router.get('/read', function(req, res, next) {
  fs.readFile('./message.txt', 'utf8', function(err, data){
    res.send(data)
});
});

module.exports = router;
