/**
 * Create by park031517@gmail.com on 2020-08-7, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */

const router = require("express").Router()

router.get("", (req, res) => {
    res.send("user view ")
})

module.exports = router
