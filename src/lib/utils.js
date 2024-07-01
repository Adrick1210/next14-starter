const {default: mongoose} = require("mongoose");

const connection = {};

export const connectToDB = async () => {
  try {
    if(connection.isConnected) {
        console.log("using existing connection")
        return;
    }
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected!")
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};