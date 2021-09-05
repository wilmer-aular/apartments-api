import Apartment from "../models/Upartaments";
import crudService from "./crud.service";

const crud = crudService(Apartment);
const apartmentsService = {
  create: async (body) => {
    return await crud.create(body);
  },
  all: async () => {
    return await crud.all();
  },
  byId: async (id) => {
    return await crud.byId(id);
  },
  update: async (id, body) => {
    return await crud.update(id, body);
  },
  delete: async (id) => {
    return await crud.remove(id);
  },
};

export default apartmentsService;
