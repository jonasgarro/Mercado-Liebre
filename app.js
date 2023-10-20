const express = require('express');
const path = require('path');
const app = express();
 
app.listen(3030, () =>{ console.log('server run')});

app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.use(express.static('public'));