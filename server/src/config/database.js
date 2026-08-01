import mongoose from "mongoose";

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(
      process.env.MONGO_URI,
      {
        autoIndex: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );

    mongoose.connection.on(
      "connected",
      () => {
        console.log(
          "MongoDB connection established."
        );
      }
    );

    mongoose.connection.on(
      "error",
      (err) => {
        console.error(
          "MongoDB Error:",
          err.message
        );
      }
    );

    mongoose.connection.on(
      "disconnected",
      () => {
        console.log(
          "MongoDB disconnected."
        );
      }
    );

  } catch (error) {

    console.error(
      "Database Connection Failed"
    );

    console.error(error.message);

    process.exit(1);

  }
  process.on(
  "SIGINT",
  async () => {

    await mongoose.connection.close();

    console.log(
      "MongoDB connection closed."
    );

    process.exit(0);

  }
);

process.on(
  "SIGTERM",
  async () => {

    await mongoose.connection.close();

    console.log(
      "MongoDB connection terminated."
    );

    process.exit(0);

  }
);
};

export default connectDB;