
import express = require('express')
import type{Request,Response} from "express"
import dotenv = require("dotenv");

dotenv.config()

const app = express()
const port = process.env.port || 3000


app.get("/" , (req:Request , res:Response)=>{
    res.send("Hello Everyone")
})



app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});


app.listen(3000, () => console.log("Server running on port 3000"));
