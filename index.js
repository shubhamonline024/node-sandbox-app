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
  <title>API Request Essentials & REST API Rules</title>

  <!-- Highlight.js stylesheet -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">

  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #333; }
    h2 { margin-top: 40px; color: #444; }
    ul { margin-top: 20px; }
    li { margin-bottom: 8px; }
    pre { padding: 16px; background: #1e1e1e; border-radius: 6px; }
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

  <h2>REST API Rules & Best Practices</h2>
  <ul>
    <li><strong>Use Nouns, Not Verbs:</strong> Resource names should be nouns (e.g., <code>/users</code>).</li>
    <li><strong>Use Plural Resource Names:</strong> e.g., <code>/products</code>, <code>/orders</code>.</li>
    <li><strong>Use HTTP Methods for Actions:</strong> GET = read, POST = create, PUT = update, DELETE = remove.</li>
    <li><strong>Use Resource Nesting When Necessary:</strong> e.g., <code>/users/123/orders</code>.</li>
    <li><strong>Filter, Sort, and Paginate with Query Params:</strong> e.g., <code>?limit=10&sort=date</code>.</li>
    <li><strong>Use Consistent Naming Conventions:</strong> Use lowercase and hyphens.</li>
    <li><strong>Stateless Requests:</strong> No client state stored on server.</li>
    <li><strong>Return Proper HTTP Status Codes:</strong> 200, 201, 400, 404, etc.</li>
    <li><strong>Use JSON as the Standard Response Format:</strong> Predictable and readable structure.</li>
    <li><strong>Version Your API:</strong> e.g., <code>/api/v1/users</code>.</li>
    <li><strong>Meaningful Error Messages:</strong> Include <code>message</code> and <code>details</code>.</li>
    <li><strong>Ensure Security:</strong> HTTPS, validation, no sensitive data leakage.</li>
    <li><strong>Idempotency:</strong> PUT/DELETE should produce same results on repeats.</li>
    <li><strong>Use ETags or Cache-Control:</strong> Improve performance.</li>
    <li><strong>Rate Limit Responses:</strong> Use headers like <code>X-Rate-Limit</code>.</li>
    <li><strong>Return Minimal Required Data:</strong> Use field selection.</li>
    <li><strong>Avoid Large Nested Objects:</strong> Use links instead.</li>
  </ul>

  <h2>Example REST API Request</h2>

  <pre><code class="json">
{
  "method": "POST",
  "endpoint": "/api/v1/users",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  },
  "body": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
  </code></pre>

  <!-- Highlight.js script -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>

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
