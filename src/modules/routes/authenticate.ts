import "dotenv/config";
import type { Request, Response, NextFunction } from "express";

export let authRouter = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.KEY === req.query.key) {
    console.log("auth: true");
    next();
  } else {
    console.log("auth: false");
    res.status(403).send("Invalid API Key");
  }
};
