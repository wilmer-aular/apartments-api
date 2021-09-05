import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import crudService from "../services/crud.service";

const crud = crudService(User);
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res.status(401).json({ status: 401, message: "unauthorized" });

    const verify = jwt.verify(token, config.SECRECT);
    req.userId = verify.id;
    const user = await crud.byId(req.userId);
    if (!user)
      return res.status(404).json({ status: 404, message: "not User Found" });
    return next();
  } catch (err) {
    console.error({ err });
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const IsAdmin = async (req, res, next) => {
  const user = await crud.byId(req.userId);

  const roles = user.roles.map((i) => i.name);
  if (!roles.includes("admin"))
    return res
      .status(401)
      .json({ access: null, message: "Require admin role" });
  return next();
};
