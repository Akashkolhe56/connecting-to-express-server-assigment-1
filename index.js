require('dotenv').config()
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const { error } = require('console');
const app = express();
const port = 3010; 
const DB_URL=process.env.URL

app.use(express.static('static'));
const connectDB=async ()=>{
  await mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected to MongoDB")
  }).catch((error)=>{
    console.log(error)
  })
}
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

connectDB().then(()=>{
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
})

