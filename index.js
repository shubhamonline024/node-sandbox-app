const express = require("express");

const PORT = 80;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const output = (req, res) => {
  return {
    // Direct request-based values
    "Endpoint (URL) – req.url": req.url,
    "HTTP Method – req.method": req.method,
    "Headers – req.headers": req.headers,
    "Query Parameters – req.query": req.query,
    "Route Parameters – req.params": req.params,
    "Request Body – req.body": req.body,
    "Authentication – req.headers['authorization']":
      req.headers["authorization"] || null,
    "Content-Type – req.headers['content-type']":
      req.headers["content-type"] || null,

    // Response-based (not from req, but included for completeness)
    "Status Code – res.statusCode": res.statusCode,
    "Response Body – (set by server)":
      "N/A (response body is what you're viewing right now)",

    // Server/runtime related values
    "Timeouts – req.socket.timeout": req.socket?.timeout || null,
    "Error Handling – (server controlled)": "Handled by Express middleware",
    "Rate Limiting – (not enabled)": "No rate limiting configured",
    "Caching – req.headers['cache-control']":
      req.headers["cache-control"] || null,
    "CORS – req.headers['origin']": req.headers["origin"] || null,
    "Req Body = req.body": req.body || null,
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
  res.json(output(req, res));
});

app.post("/post", (req, res) => {
  res.json(output(req, res));
});

app.post("/post/:id", (req, res) => {
  res.json(output(req, res));
});

app.put("/put", (req, res) => {
  res.json(output(req, res));
});

app.patch("/patch", (req, res) => {
  res.json(output(req, res));
});

app.delete("/delete", (req, res) => {
  res.json(output(req, res));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
