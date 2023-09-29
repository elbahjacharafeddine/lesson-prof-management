const mongoose = require("mongoose");


const connectDB = async () => {
  mongoose.set("useCreateIndex", true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/pfa", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log(`DB Connection Error: ${error.message}`));
};





module.exports = connectDB;
