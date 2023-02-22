import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const { email, password, role, active } = req.body;
    // if (name.match(/[0-9]/)) {
    //   return res.json({
    //     message: "Name can`t be a number",
    //   });
    // }
    // if (!name || !email || !password) {
    //   return res.json({
    //     message: "Please fill out the fields.",
    //   });
    // }

    // if (password.length < 8) {
    // return res.json({ message: "Password must be at least 8 characters" });
    // }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ message: "Email already exists" });
    }

    const newUser = new User({
      email,
      password,
      role,
      active,
    });
    await newUser.save();
    res.status(200).json({ message: `User added successfully` });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "Please fill out the fields.",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "User not registered",
      });
    }
    if (user.password != password)
      return res.json({ message: "Email or Password is incorrect" });
    console.log(user.active);
    if (user.active == "false") {
      return res.json({ message: "Your Account has been Deactivated" });
    }
    //  console.log(`matched`);

    const token = jwt.sign({ id: user._id }, "mysupersecret786", {
      expiresIn: "5d",
    });

    return res.cookie("token", token, { httpOnly: true }).json({
      token: `You are logged in`,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  if (req.cookies)
    return res
      .cookie("token", "", { httpOnly: true, expires: new Date(0) })
      .status(200)
      .json({ message: "Successfully logged out 😏" });
  else {
    return res.json("error in logging you out");
  }
};

const loggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    const decode = jwt.verify(token, "mysupersecret786");
    const id = decode.id;
    req.user = await User.findById(id);

    return res.send(req.user.role);
  } catch (err) {
    return res.json(false);
  }
};

export { register, login, logout, loggedIn };
