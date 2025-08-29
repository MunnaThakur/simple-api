const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// GET API
app.get('/api/user', (req,res)=>{
  console.log("GET request received!")
  res.status(200).json({message: 'GET request hitted.'})
})

// POST API
app.post('/api/data', (req,res)=>{
  console.log("Post request received with data");
  res.status(200).json({message: 'POST request hitted.'});
})

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})