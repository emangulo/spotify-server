import "dotenv/config";

export let authRouter = (req, res, next) => {
  if (process.env.KEY === req.query.key) {
    console.log("auth: true");
    next();
  } else {
    console.log("auth: false");
    res.status(403).send("Invalid API Key");
  }
};
