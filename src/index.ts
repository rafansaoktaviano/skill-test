import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

import * as countRouter from "./routers";

//Fizzbuzz
const fizzBuzz = (n: number) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(50);

// Palindrome
const palindrom = (text: string) => {
  text.toLocaleLowerCase();
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right])
      return console.log(`${text} It's not a palindrome`);
    left++;
    right--;
  }
  return console.log(`${text} is a palindrome`);
};

palindrom("rafansa");

app.use("/api", countRouter.countRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("working");
});

interface CustomError extends Error {
  status?: number;
  statusCode?: number;
}

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode =  err.status || 500;
  const statusMessage = err.message || "Error";

  return res.status(statusCode).send({
    isError: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`);
});
