
var http=require('http');
var account=require('./account');


http.createServer(function(req,res){
res.writeHead(200);
res.write(account.textFunc());
res.write(account.balanceAmt()+'\n');

res.end();
}).listen(3000);
