const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

let home = new Router()
home.get('/leni', async(ctx)=>{
    ctx.body = 'Home leni page'
}).get('/todo', async(ctx)=>{
    ctx.body = 'Home todo page'
})

let page = new Router()
page.get('/leni', async(ctx)=>{
    ctx.body = 'Page leni page'
}).get('/todo', async(ctx)=>{
    ctx.body = 'Page todo page'
})

// 父级路由, 装载所有子路由
const router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('[demo07] is starting at port 3000')
})