import mongoose from "mongoose";
import Booking from "../models/BookingModel.js";

const AddEmployee = async (req, res, next) => {
  try {
    const { name, message, subject, phone, email, hireDate } = req.body;

    const newEmployee = new Booking({
      name,
      message,
      subject,
      phone,
      email,
      hireDate,
    });
    await newEmployee.save();
    return res.json({ message: "Booking added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLEmployees = async (req, res) => {
  try {
    const employees = await Booking.find();
    return res.json(employees);
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    console.log(req.params.id);
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.json({ message: "id is not valid" });
    }

    await Booking.findByIdAndDelete(req.params.id);
    return res.json({ message: `Booking deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export { getALLEmployees, AddEmployee, deleteEmployee };
