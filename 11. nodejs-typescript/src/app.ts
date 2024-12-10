import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();
const port = 3000;

app.use(express.json());

interface CustomRequest extends Request {
  startTime?: number;
}

// middleware -> add startTime to request
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello. Typescript with express");
});

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
