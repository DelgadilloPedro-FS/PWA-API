const signup = (req, res) => {
    console.log(req.body)
  res.status(200).json({
    status: true,
    ...req.body,
    password: req.body.password.split("").map((char) => "*").join(""),
  });
};

module.exports = {signup};