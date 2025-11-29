const express = require("express");

const app = express();
const PORT = 80;

const output = (req) => {
  return {
    "1] req.url": req.url,
    "2] req.path": req.path,
    "3] req.route": req.route,
    "4] req.params": req.params,
    "5] req.query": req.query,
    "6] req.body": req.body,
    "7] req.headers": req.headers,
    "8] req.method": req.method,
    "9] req.ip": req.ip,
    "10] req.ips": req.ips,
    "11] req.protocol": req.protocol,
    "12] req.hostname": req.hostname,
  };
};

app.get("/get", (req, res) => {
  res.json(output(req));
});

app.post("/post", (req, res) => {
  res.json(output(req));
});

app.put("/put", (req, res) => {
  res.json(output(req));
});

app.patch("/patch", (req, res) => {
  res.json(output(req));
});

app.delete("/delete", (req, res) => {
  res.json(output(req));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
