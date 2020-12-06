const express = require('express')

const app = express()


aapp.get('/', function (req, res) {
    console.log("Home GET ");
    res.send('Hello GET');
 })
  
  
 app.post('/', function (req, res) {
    console.log("Home POST ");
    res.send('Hello POST');
 })
  
 app.get('/del_user', function (req, res) {
    console.log("/del_user  DELETE ");
    res.send('Delete');
 })
  
 app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('List');
 })


app.listen(3000, () => {
    console.log('http://localhost:3000')
})
