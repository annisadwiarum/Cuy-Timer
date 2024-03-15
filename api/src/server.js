const HyperE = require("hyper-express");
const hyper = new HyperE.Server();
const PORT = process.env.PORT || 1999;
const db = require("./config/database");

const auth_middleware = (req, res, next) => {
  console.log("auth protection...");
  res.send("resp ok");
  next();
};

hyper.get("/", { middlewares: [auth_middleware] }, (_, r) => {
  console.log("get api ready...");

  const x = db.query("select * from users");
  console.log("test db", x);

  return r.json({
    status: "OK GASS",
    api_version: "1.0.0",
  });
});

const user_router = new HyperE.Router();

user_router.get("/profile", (req, res) => {
  console.log("profile user test");
  res.send("profile user");
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
