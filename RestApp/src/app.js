/**
 * Create by park031517@gmail.com on 2020-08-7, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */

const express = require("express") ,
    app = express(),
    http = require("http").createServer(app),
    port = 5000

const bodyParser = require("body-parser")

const router = require("./script/controller/index")

app.use(router)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended : true}))

http.listen(port , () =>{
    console.log(`START WEB SERVICE PORT => ${port}`)
})

