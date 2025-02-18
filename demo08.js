const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx,next)=>{
    ctx.body = ctx.query
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('[demo08] is starting at port 3000')
})