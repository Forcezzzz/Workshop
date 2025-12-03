const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/register',(req, res)=>{ //เปิดหน้าต่าง
    res.sendFile(path.join(__dirname,'register.html'))
})

app.post('/register',(req, res)=>{  //รับค่า
  const { empid, deptt } = req.body
  console.log(empid, deptt)
  res.send(`Recieved data: Name = ${empid}, Email = ${deptt}`)
})

app.get('/aboutus',(req, res)=>{
    res.sendFile(path.join(__dirname,'aboutus.html'))
})

app.get('/download',(req, res)=>{
    res.send('<h1>You are about to open download web page</h1>')
})

app.listen('3000', ()=>{
    console.log('server started ... ')
})


/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/