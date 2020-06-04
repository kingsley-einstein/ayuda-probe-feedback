const app = require("express")();
const router = require("./router");
const pinger = require("./ping");

app.use(require("express").json())
app.use(require("express").urlencoded({
  extended: false
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");
  next();
});

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("Server running");
  pinger.ping();
});
