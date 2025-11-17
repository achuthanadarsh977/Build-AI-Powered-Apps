
import type { Request, Response } from "express";
import express = require('express')

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Everyone");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
