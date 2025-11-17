

import express = require('express')

import type {Request,Response} from "express"

const app = express()

const port = process.env.PORT || 3000

app.get('/' , (req: Request , res: Response) =>
{res.send('1234');

})

app.listen(port , () => {
    console.log(`Server running at  http://localhost:${port}`);
})