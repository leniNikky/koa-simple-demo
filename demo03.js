const Koa = require('koa')
const app = new Koa()

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
        let postData = await parsePostData(ctx)
        ctx.body = parseQueryStr(postData)
    }else{
        ctx.body = '<h1>404</h1>'
    }
    
})

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try {
            let postData = ''
            ctx.req.on('data',data=>{
                postData += data
            })
            ctx.req.addListener('end', function(){
                resolve(postData)
            })
        } catch (error) {
            reject(error)
        }
    })
}

function parseQueryStr(queryStr){
    let queryData = {}
    let queryStrList = queryStr.split('&')
    for(let item of queryStrList){
        let itemList = item.split('=')
        console.log(itemList)
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
}

app.listen(3000,()=>{
    console.log('[demo03] is starting at port 3000')
}) 