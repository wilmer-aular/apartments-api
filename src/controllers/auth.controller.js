import authService from "../services/auth.service";
import { toResponse } from "../util/toResponse.util";

const authController = {
  login: async (req, res) => {
    const promise = authService.login(req.body);
    toResponse(promise, res, "auth/login");
  },
};

export default authController;
