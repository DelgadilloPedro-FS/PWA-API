
const signup = (req, res) => {
  res.status(200).json({
    message: "User has sucessfully signed up!",
    user:{...req.body,
    password: req.body.password.split("").map((char) => "●").join("")},
  });
};

module.exports = {signup};