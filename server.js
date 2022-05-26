let http = require('http')
let users=[
  {id:1,name:'wocao'},
  {id:12,name:'wocao2'}
]
let server = http.createServer(function(req ,res){
  res.setHeader('Access-Control-Allow-Origin','*')
if(req.url==='/api/users'){
  res.end(JSON.stringify(users))
}else{
  res.end('Not Found')
}
})
server.listen(3000,()=>{
  
  console.log('3000 server 启动成功')
})