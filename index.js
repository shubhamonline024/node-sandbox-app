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

const page = `<!DOCTYPE html>
<html>
<head>
  <title>API Request Essentials</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #333; }
    ul { margin-top: 20px; }
    li { margin-bottom: 8px; }
  </style>
</head>
<body>
  <h1>Important Points for an API Request</h1>
  <ul>
    <li><strong>Endpoint (URL):</strong> The address where the request is sent.</li>
    <li><strong>HTTP Method:</strong> Defines the action (GET, POST, PUT, DELETE).</li>
    <li><strong>Headers:</strong> Metadata like content type and authentication.</li>
    <li><strong>Query Parameters:</strong> URL key-value pairs for filtering/sorting.</li>
    <li><strong>Route Parameters:</strong> Dynamic URL segments identifying resources.</li>
    <li><strong>Request Body:</strong> Data payload sent in POST/PUT requests.</li>
    <li><strong>Authentication:</strong> API key, token, or OAuth for identity verification.</li>
    <li><strong>Content-Type:</strong> Tells server how to parse the request body.</li>
    <li><strong>Status Codes:</strong> Indicates response result (success, error, etc.).</li>
    <li><strong>Response Body:</strong> Data returned by the API.</li>
    <li><strong>Timeouts:</strong> How long to wait for a server response.</li>
    <li><strong>Error Handling:</strong> Managing invalid or failed responses.</li>
    <li><strong>Rate Limiting:</strong> Restricts how often you can call the API.</li>
    <li><strong>Caching:</strong> Store responses to improve performance.</li>
    <li><strong>CORS:</strong> Controls cross-domain API permissions.</li>
  </ul>
</body>
</html>
`;

app.get("/", (req, res) => {
  res.send(page);
});

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
