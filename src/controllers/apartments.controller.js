import apartmentsService from "../services/apartments.service";
import { toResponse } from "../util/toResponse.util";

const apartmentsCtrl = {
  create: (req, res) => {
    const promise = apartmentsService.create(req.body);
    toResponse(promise, res, "apartments/create");
  },
  all: (req, res) => {
    const promise = apartmentsService.all();
    toResponse(promise, res, "apartments/all");
  },
  byId: (req, res) => {
    const { id } = req.params;
    const promise = apartmentsService.byId(id);
    toResponse(promise, res, "apartments/byId");
  },
  update: (req, res) => {
    const { id } = req.params;
    const promise = apartmentsService.update(id, req.body);
    toResponse(promise, res, "apartments/update");
  },
  delete: (req, res) => {
    const { id } = req.params;
    const promise = apartmentsService.delete(id);
    toResponse(promise, res, "apartments/delete");
  },
};

export default apartmentsCtrl;
