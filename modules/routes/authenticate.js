import "dotenv/config";

export let authRouter = (req, res, next) => {
  let key = process.env.KEY;

  if (key === req.query.key) {
    console.log("auth: true");
    next();
  } else {
    console.log("auth: false");
    res.status(403).send("Invalid API Key");
  }
};
