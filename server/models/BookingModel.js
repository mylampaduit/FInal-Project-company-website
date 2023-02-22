import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: {
      type: String,
      unique: true,
      validite: function (v) {
        return /^([a-z0-9_-]+)(@[a-z0-9-]+)(\.[a-z]+|\.[a-z]+\.[a-z]+)?$/is.test(
          v
        );
      },
      message: (props) => `${props.value} is not valid email`,
    },
    phone: { type: Number },
    hireDate: { type: String },
    subject: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
