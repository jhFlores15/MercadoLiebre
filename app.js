const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.listen(3030,() => console.log("Servidor escuchando en puerto 3030"));

app.get('/', (req,res) => { 
    let index= path.resolve(__dirname,"./views/home.html")
    res.sendFile (index);
  })

 



