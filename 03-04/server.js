
const http = require("http");
const fs = require('fs')
var _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  // set header content type

  // res.setHeader('Content-Type', 'text/html');

  // res.write(' <h1>Hi there</h1>');
  // res.write(' <h1>Hi there</h1>');
  // res.end();
  // when the content type is plain text this will show hithere on browser

  // send html file

  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   res.write(data);
  //     res.end();
  // })
  // reading the index.html file from path amd using write method writing data to responce

//lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });
  greet();
  greet();

  // set header content type
  res.setHeader("Content-Type", "text/html");







  // routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    case "/about-why":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    // we are resirecting the /about-us to about using setHeader it will take 2 parammeter ofirst Location and secod the raut wee want to redirect

    default:
      path += "404.html";
      res.statusCode = 404;
  }
    // with req.url we can acces the data entered in browser serchbar and we are checking it with the routs which we have if matches we sent that page as responce . path variable holds the reffernce of the path of the file which has to be sent as response




  // send html
  fs.readFile(path, (err, data) => {

    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });

  //using fs mode and .readFile we read the file which is in path(reffernce) and  sent that as response using res.end(data) or we can use res.write(data)


 

});







// localhost is the default value for 2nd argument
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
