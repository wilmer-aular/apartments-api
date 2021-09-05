import { toResponse } from "../util/toResponse.util";
import userService from "../services/user.service";

const userController = {
  create: (req, res) => {
    const promise = userService.create(req.body);
    toResponse(promise, res, "user/create");
  },
  all: (req, res) => {
    const promise = userService.all();
    toResponse(promise, res, "user/all");
  },
};

export default userController;
