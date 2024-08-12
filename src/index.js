import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dotenv.config({
//   path: "./env",
// });

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Errr:", err);
      process.exit(1);
    });
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!! ", err);
    process.exit(1);
  });
