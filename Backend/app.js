// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello this is addressbook server !');
//  });
 
//  server.listen(3001, () => {
//      console.log('Server is started');
//  });

/*
 const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Adressbook is working');
    });

    app.listen(3001,()=>{
        console.log('Server is Started');
    })

    */
// console.log("Hello World");



const express = require("express");
const app = express();

app.use(express.json());
const books = [
  {
    id: 1,
    description: "Math",
  },
  {
    id: 2,
    description: "Biology",
  },
  {
    id: 3,
    description: "programing",
  },
];
// app.get("/books", (req, res) => {
//   res.setHeader("Content-Type", "application/json");           //by this it converted into JSON format
//   res.setHeader("My-Header","ABC");
    //  res.status(500).json({message:'Something went wrong'});
    //  res.status(200).json({message: 'Sucessful'});
//   console.log(req);
//     const data = JSON.stringify({
//         success: true,
//         result: books
//     });

//   res.json({
//     success: true,
//     result: books
// });
//   res.send(data);
// });

app.get("/", (req, res) => {
  console.log(req);
  console.log(req.query);

  res.send('data');
});

// app.get("/api/books", (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("My-Header", "ABC");
  // res.status(500).json({message: 'SOmething went wrong'});
  // res.status(200).json({message: 'Sucessful'});
  // console.log(req.query);

//   res.json({
//     success: true,
//     result: books
// });
// });

app.get("/api/book", (req, res) => {
  console.log(req.query);
  res.status(200).json({message: 'Sucessfull', data: req.query});
});

app.post('/api/create-book', (req, res)=> {
  console.log(req.body);
  res.status(200).json({message: 'Sucessful'});
  res.status(200).json({message:"Successful",data:req.body});
  });

  
  app.listen(3001, () => {
    console.log("Server is started");
  });

// app.listen(3001, () => {
//   console.log("Server is started");
// });