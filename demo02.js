const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=>{
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})
app.listen(3000,()=>{
    console.log('[demo] is starting at port 3000')
})