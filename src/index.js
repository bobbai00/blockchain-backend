const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { default: route } = require('./routers')
const logger = require('./utils/logger')
const app = new Koa()

app.use(bodyParser())
app.use(logger)
route(app)
app.listen(3000)
console.log('blockchain-backend listening at port 3000')