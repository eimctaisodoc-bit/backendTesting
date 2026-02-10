const express = require("express");
const app = express();

const serverLess=require('serverless-http')
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Express App</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #0f172a, #020617);
            color: #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .card {
            background: #020617;
            padding: 40px;
            border-radius: 14px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
            text-align: center;
            max-width: 420px;
          }
          h1 {
            margin-bottom: 10px;
            font-size: 28px;
          }
          p {
            opacity: 0.8;
          }
        </style>
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


// console.log('running....')
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// console.log('running')
module.express=serverLess(app)
