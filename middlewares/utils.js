const vaildateName = (req, res, next) => {
  const regex = /^[A-z]+\ [A-z]+$/;
  if (regex.test(req.body.name)) {
    return next();
  }
  res.status(422).json({
    status: false,
    msg: "Name is not valid.",
  });
};
const vaildateEmail = (req, res, next) => {
  const regex = /^([A-Za-z0-9+._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})$/;
  if (regex.test(req.body.email)) {
    return next();
  }
  res.status(422).json({
    status: false,
    msg: "Email is not valid.",
  });
};
const vaildatePhone = (req, res, next) => {
  const regex = /^(.*)$/;
  if (regex.test(req.body.phone)) {
    return next();
  }
  res.status(422).json({
    status: false,
    msg: "Phone is not valid.",
  });
};
const vaildateBirthday = (req, res, next) => {
  const regex = /^(.*)$/;
  if (regex.test(req.body.birthday)) {
    return next();
  }
  res.status(422).json({
    status: false,
    msg: "Birthday is not valid.",
  });
};
const vaildatePassword = (req, res, next) => {
  const regex = /^(.*)$/;
  if (regex.test(req.body.password)) {
    return next();
  }
  res.status(422).json({
    status: false,
    msg: "password is not valid.",
  });
};
module.exports = {
  vaildateName,
  vaildateBirthday,
  vaildateEmail,
  vaildatePhone,
  vaildatePassword,
};
