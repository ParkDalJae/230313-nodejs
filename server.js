const http = require("http")                                    //요청함(내장모듈)


const server = http.createServer(function(request, response){   //서버를 만드는 내용
  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');

  const mainPage = require(`./module/html.js`)                    //요청함
  console.log(mainPage)

  response.write(mainPage.asdf);
  // response.write('test');
  response.end();
});

server.listen(2080, function(error){                            //듣고있다.
  if(error){
    console.error('서버가 맛이 감')
  }else{
    console.error('서버 잘 돌아감')
  }
})