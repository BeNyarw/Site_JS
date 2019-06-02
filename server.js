const http = require('http')
const server = http.createServer();
const fs = require('fs')
const path = require('path')
var mime = {
      ".html": "text/html",
      ".jpeg": "image/jpeg",
      ".jpg": "image/jpeg",
      ".png": "image/png",
      ".js": "text/javascript",
      ".css": "text/css",
      ".ico": "image/x-icon",
      ".pdf": "application/pdf"
}

var requetePage = function(req,res){
    if ("/" === req.url) {
      req.url = "/index.html"
    }
    var pathFile  = path.normalize(__dirname + req.url)
      fs.readFile(pathFile,function(err,data){
        if (err) {
            fs.readFile('./error.html','utf8',function(err,data){
              res.writeHead(404,{
                'Content-Type': 'text/html',
                'Content-Length': Buffer.byteLength(data, 'utf8')
              })

              res.write(data,function(){
                res.end()
              })
            })

        }else {
          res.writeHead(200,{
            'Content-Type': mime[path.extname(req.url)],
            'Content-Length': Buffer.byteLength(data, 'utf8')
          })

          res.write(data,function(){
            res.end()
          })
        }
      })
}

server.on('request',function(req,res){
  requetePage(req,res)
}).listen(8888)
