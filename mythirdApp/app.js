const express = require("express");
const app = express();

 app.get("/", (req, res) => {
     res.send("Welcome to the third application");
   });

app.listen(3000,() => {
    console.log('My app is running');
})
 