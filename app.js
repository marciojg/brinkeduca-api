const express = require('express');
const students = [
  { name: 'Sofia',    rm: 553  }, 
  { name: 'Giovanna', rm: 251  }, 
  { name: 'Estevan',  rm: 1894 }, 
  { name: 'Marcos',   rm: 1632 }, 
  { name: 'Livia',    rm: 544  }, 
];

const app = express();
let port = process.env.PORT;

if (port == null || port == '') {
  port = 8000;
}

app.listen(port, ()=> {
  console.log(`Example app listening at PORT ${port}`)
})

app.get('/', (_, res) => {
  res.send('BrinkEduca')
})

app.get('/students', (_, res)=>{
  res.send({ students: students })
})

app.get('/students/auth/:rm', (req, res)=>{
  const student = students.find(el => el.rm.toString() === req.params.rm);

  if (student != null && student != undefined) {
    res.send({ status: 'ok', data: student });
  } else {
    res.send({ status: 'error' });
  }
})