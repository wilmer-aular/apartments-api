import Role from "../models/Role";
import User from "../models/User";

export const checkRoles = async (req, res, next) => {
  if (req.body.roles) {
    const role = await Role.find({});
    const nameRoles = role?.map((i) => i.name);
    req.body.roles.forEach((element) => {
      if (!nameRoles.includes(element)) {
        return res
          .status(400)
          .json({ messaje: `Roles ${req.body.roles} does not Exist` });
      }
    });
  }
  next();
};
export const checkUser = async (req, res, next) => {
  const { username, email } = req.body;
  const promise = await Promise.all([
    User.findOne({ username }),
    User.findOne({ email }),
  ]);
  if (promise[0]) return res.json({ messaje: "UserName exist" });

  if (promise[1]) return res.json({ messaje: "Email exist" });

  return next();
};
