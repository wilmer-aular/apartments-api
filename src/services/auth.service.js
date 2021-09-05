import crudService from "../services/crud.service";
import bcrypt from "bcryptjs";
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

const crud = crudService(User);

const authService = {
  login: async (user) => {
    const email = user.email;
    const userFound = await crud.findOne({ email });
    if (!userFound) return { message: "Username does not exist", status: 400 };

    const compare = await comparePassword(user.password, userFound.password);
    if (!compare) return { token: null, message: "invalid password" };
    const token = jwt.sign({ id: userFound._id }, config.SECRECT, {
      expiresIn: 86400,
    });
    return { token };
  },
};
const comparePassword = async (passwrd, recievedPasswrd) => {
  return await bcrypt.compare(passwrd, recievedPasswrd);
};

export default authService;
