const HyperE = require("hyper-express");
const hyper = new HyperE.Server();
const PORT = process.env.PORT || 1999;
const db = require("./config/database");

const auth_middleware = (req, res, next) => {
  console.log("auth protection...");
  next();
};

hyper.get("/", { middlewares: [auth_middleware] }, (_, r) => {
  console.log("get api ready...");

  return r.json({
    status: "OK GASS",
    api_version: "1.0.0",
  });
});

const user_router = new HyperE.Router();

user_router.get("/profile", (req, res) => {
  db.query("select * from users", (err, result) => {
    if (err) throw new Error("Error euy!!");
    const profile = {
      username: result[0].username,
      token: result[0].token,
    }
    res.json({profile})
  });
  console.log("profile user test");
});

user_router.post("/login", (req, res) => {
  console.log("login user test");
  res.send("login user");
});

hyper.use("/users", user_router);

hyper
  .listen(PORT)
  .then(() => console.log(`server running on port ${PORT}`))
  .catch(() => console.warn(`something wrong in server`));
