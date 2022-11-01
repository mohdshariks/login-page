const express = require("express")
const app = express()

app.use(express.static("views"))

const email="mohammedshariks@gmail.com"
const password="12345"

app.post("/login",(req,res)=>{
    const { email, password } = req.body;

    if(email === emailDB && password ===  passwordDB) {
        res.send("Login Successfull");
    }else {
        res.send("Login Failed");
    }
})

const PORT = process.env.PORT || 8009

app.listen(PORT)