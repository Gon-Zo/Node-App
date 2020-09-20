/**
 * Create by park031517@gmail.com on 2020-08-8, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */

const helloView = require("./hello.controller")

const userView = require("./user.controller")

const router = require("express").Router()

router.use("/hello" , helloView)

router.use("/user" , userView)

module.exports = router
