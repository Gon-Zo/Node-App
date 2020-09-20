/**
 * Create by park031517@gmail.com on 2020-08-8, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */

const pg = require("pg")

const config = require("./db.config")

pg.Connection(config.HOST + config.DB, () => {

})
