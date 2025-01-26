const User = require("../models/userModel.js");
const createError = require("../utilites/appError");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError("User already exists!", 400));
    }
    const hashedPassword = await Bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        _id: newUser._id,
      },
      process.env.JWT_SECRET || "secret124",
      { expiresIn: "24h" }
    );
    res.status(201).json({
      status: "success",
      message: "user registered",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next();
    console.log(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User does not exist!");
      next(new createError("User does not exist", 404));
      return;
    }
    const isPassword = await Bcrypt.compare(password, user.password);
    if (!isPassword) {
      console.log("Wrong password or email");
      next(new createError("Wrong password or email", 401));
      return;
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET || "secret124",
      { expiresIn: "24h" }
    );
    res.status(200).json({
      status: "success",
      token,
      message: "Logged In successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

module.exports = {
  signUp,
  login,
};
