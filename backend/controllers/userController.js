const User = require("../models/userModel");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//     const user = await User.findOne({ userName , email });
//     if (user) {
//       return res
//         .status(409)
//         .json({ success: false, message: "User already exists!" });
//     }

//     // Hash the password
//     const hashedPassword = await Bcrypt.hash(password, 10);

//     // Create and save the new user
//     const newUser = new User({
//       userName,
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();

//     return res
//       .status(201)
//       .json({ success: true, message: "Sign-Up Successful!" });
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Internal Server Error" });
//   }
// };

// Login Controller
const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Retrieve the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found!" });
    }

    // Compare the password
    const isPasswordValid = Bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Wrong Password!" });
    }

    // Generate a JWT token
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      jwtToken,
      email,
      userName: user.userName,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const postUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Check if userName or email already exists
    const existingUser = await User.findOne({ $or: [{ userName }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User with this email or username already exists!" });
    }

    // Hash the password and save the new user
    const hashedPassword = await Bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({ success: true, message: "Sign-Up Successful!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { postUser, getUser };

