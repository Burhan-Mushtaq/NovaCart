import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/database.js";

const PORT =
  process.env.PORT || 5000;

connectDB();

const server = app.listen(
  PORT,
  () => {

    console.log(`
=========================================
Server Running Successfully
http://localhost:${PORT}
=========================================
`);

  }
);

process.on(
  "unhandledRejection",
  (err) => {

    console.error(
      "Unhandled Rejection:",
      err.message
    );

    server.close(() => process.exit(1));

  }
);

process.on(
  "uncaughtException",
  (err) => {

    console.error(
      "Uncaught Exception:",
      err.message
    );

    process.exit(1);

  }
);