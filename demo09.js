const Koa = require('koa')
const app = new Koa()
app.use(async(ctx)=>{
   if(ctx.url === '/index'){
        ctx.cookies.set(
            'MyName', 'Leni', {
                domain: '127.0.0.1',
                path: '/', // 改为/index的话，只有路径为/index时才能访问到
                maxAge: 1000*60*60*24,
                expires: new Date('2020-03-01'),
                httpOnly: false,
                overwirte: false
            }
        )
        ctx.body = 'Cookie is ok'
   }else{
        if(ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName')
        }else{
            ctx.body = 'hello, leni'
        }
   }
})
app.listen(3000,()=>{
    console.log('[demo09] is starting at port 3000')
})