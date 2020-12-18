const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());

// Serve Static Assets
app.use(express.static('public'));

// console.log(__dirname)
// console.log("Server Started");

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
  });
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
  });
  
app.listen(port, err => {
    if (err) {
      throw new Error("There was an error");
    }
    console.log(`Server is listening on ${port}`);
  });


//   NODEJS
// const http = require('http');
// const port = process.env.PORT || 3000;
// const fs = require('fs');


// fs.readFile('./views/index.html', (err, html) =>{
//     if (err){
//         throw err;
//     }
//     const server = http.createServer((req,res) => {
//         // send html
//         res.statusCode = 200;
//         if(req.url == '/'){
//         // set header content type
//         res.setHeader('Content-type', 'text/html');
//         res.write(html);
//         res.end();
//         res.statusCode = 200;
//         } 
//          // send css
//         else if(req.url == '/public/style/style.css'){
//             res.setHeader('Content-type', 'text/css');
//             res.write(fs.readFileSync('./public/style/style.css'));
//             res.end();
//         }else if(req.url == '/?name='){
//             res.setHeader('Content-type', 'application/json');
//             res.write(fs.readFileSync('./public/main.js'));
//             res.end();
//         } else {
//             // send err page
//             res.setHeader('Content-type', 'text/html');
//             res.write(fs.readFileSync('./views/404.html'));
//             res.end();
//             res.statusCode = 404;
//         }
//     });


// // localhost is the default value for second argument
// server.listen(port,'localhost', (err) => {
//     if (err) {
//         console.log(`Error: ${err}`)
//     } else {
//         console.log(`Server is listening on ${port}`);
//     }
//     });
// });