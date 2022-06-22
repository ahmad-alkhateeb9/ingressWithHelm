const express = require("express");
const app = express();

 app.get("/", (req, res) => {
     res.send("Welcome to the second application");
   });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

app.get('/profile-picture-andrea', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-andrea.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.listen(3000,() => {
    console.log('My app is running');
})
 