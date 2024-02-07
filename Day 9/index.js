const express = require("express");

const app = express();

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  console.log(`[${timestamp}] ${method} ${req.url}`);
  next();
}

app.use(requestLoggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello  we are using middleware!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
