const express = require('express');

const app = express();
let port = process.env.PORT;

if (port == null || port == '') {
  port = 8000;
}

app.listen(port, ()=> {
  console.log(`Example app listening at PORT ${port}`)
})

app.get('/', (req, res) => {
  res.send('BrinkEduca')
})

app.get('/students', (req, res)=>{
  res.send({
    students: [
      { name: 'Sofia',    rm: 553  }, 
      { name: 'Giovanna', rm: 251  }, 
      { name: 'Estevan',  rm: 1894 }, 
      { name: 'Marcos',   rm: 1632 }, 
      { name: 'Livia',    rm: 544  }, 
    ],
  })
})