var express = require('express');
var router = express.Router();
const user=require('../models/user');

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'eb based rental system',userName:'登录'});
});
router.get('/login', (req, res, next)=>{
    res.render('login', { title: 'Web based rental system',userName:'登录'});
});
router.get('/register', (req, res, next)=>{
    res.render('register', { title: 'Web based rental system',userName:'登录'});
});
router.post('/register',(req,res,next)=>{
    let body=req.body;
    res.send({res:body});
});

module.exports = router;
