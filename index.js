const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
// Your route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Express App</title>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Express is Running</h1>
          <p>Your Node.js + Express server is up and ready.</p>
        </div>
      </body>
    </html>
  `);
});

// ✅ Export for serverless
module.exports.handler = serverless(app);


