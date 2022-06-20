const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.listen(process.env.PORT || 3000,() => console.log("Servidor escuchando en puerto 3000"));

app.get('/', (req,res) => { 
    let index= path.resolve(__dirname,"./views/home.html")
    res.sendFile (index);
})

app.get('/register', (req,res) => { 
  let index= path.resolve(__dirname,"./views/register.html")
  res.sendFile (index);
})

app.get('/login', (req,res) => { 
  let index= path.resolve(__dirname,"./views/login.html")
  res.sendFile (index);
})
 



