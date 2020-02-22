function simpleFun(){
    return 'simple fun'
}
async function testAsync(){
    return 'hello async'
}

async function test(){
    const v1 = await simpleFun()
    const v2 = await testAsync()
    console.log(v1,v2)
}
test()