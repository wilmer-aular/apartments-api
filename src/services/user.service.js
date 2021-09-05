import User from "../models/User";
import crudService from "./crud.service";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

const crud = crudService(User);
const userService = {
  all: async () => {
    return await crud.all();
  },
  create: async (user) => {
    if (user.roles && user.roles.length) {
      const role = await Role.find({ name: { $in: user.roles } });
      user.roles = role?.map((i) => i._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      user.roles = [role._id];
    }
    user.password = await encriptPassword(user.password);
    const saveUser = await crud.create(user);
    const token = jwt.sign({ id: saveUser._id }, config.SECRECT, {
      expiresIn: 86400, // 24 hours
    });
    return { token };
  },
};
const encriptPassword = async (passwrd) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(passwrd, salt);
};
export default userService;
