const express = require('express');

const app = express();
let port = process.env.PORT;

if (port == null || port == '') {
  port = 8000;
}

app.listen(port, ()=> {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/students', (req, res)=>{
  res.send({
    cats: [
      { name: 'Sofia',    rm: 553 }, 
      { name: 'Giovanna', rm: 251 }, 
      { name: 'Estevan',  rm: 1894 }, 
      { name: 'Marcos',   rm: 1632 }, 
      { name: 'Livia',    rm: 544 }, 
    ],
  })
})