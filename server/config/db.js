import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://mylampaduit:5EWrDCqIjhzE8lq8@cluster0.b2j8jjs.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log(`Datebase Connected`))
    .catch((error) => console.log(error.message));
};
export default connectDB;
