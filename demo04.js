const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')

app.use(bodyparser())

app.use(async(ctx)=>{
    if(ctx.url === '/' && ctx.method === 'GET'){
        // 显示表单
        let html = `
            <h1>leni Koa2 request Post</h1>
            <form method='POST' action='/'>
                <p>userName</p>
                <input name='userName'/><br/>
                 <p>age</p>
                <input name='age'/><br/>
                <button type='submit'>submit</button>
            </form>
        `
        ctx.body = html
    }else if(ctx.url === '/' && ctx.method === 'POST'){
        // ctx.body = '接收到post参数'
        let postData = ctx.request.body
        ctx.body = postData
    }else{
        ctx.body = '<h1>404</h1>'
    }
    
})

app.listen(3000,()=>{
    console.log('[demo04] is starting at port 3000')
}) 