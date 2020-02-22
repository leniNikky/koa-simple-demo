const Koa = require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')

app.use(views(path.join(__dirname,'./views'),{
    extension: 'ejs'
}))

app.use(async(ctx)=>{
    let title = 'hello, koa2'
    await ctx.render('index', {
        title
    })
})

app.listen(3000,()=>{
    console.log('[dmeo10] is starting at port 3000')
})