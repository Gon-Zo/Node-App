/**
 * Create by park031517@gmail.com on 2020-08-7, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */

const express = require("express") ,
    app = express(),
    http = require("http").createServer(app),
    port = 5000

const helloRouter = require("./script/view/hello")

const userRouter = require("./script/view/user")

app.use("/hello" , helloRouter)

app.use("/user" , userRouter)

http.listen(port , () =>{
    console.log(`START WEB SERVICE PORT => ${port}`)
})

