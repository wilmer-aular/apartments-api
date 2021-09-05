import { manyWithId, withId } from "../util/model.util";

export const crudService = (model) => {
  return {
    all: async () => {
      return model.find({}).sort({ createdDate: -1 }).exec().then(manyWithId);
    },
    byId: async (id) => {
      const data = await model.findById(id).populate("roles");
      return withId(data);
    },
    findOne: async (params) => {
      const data = await model.findOne(params).populate("roles");
      return withId(data);
    },
    create: async (data) => {
      const modelInstance = new model(data);
      await modelInstance.validate();
      return modelInstance.save();
    },
    remove: async (id) => {
      await model.findByIdAndDelete(id);
      const response = { success: true };
      return response;
    },
    update: async (id, newData) => {
      const dataUpdate = await model.findByIdAndUpdate(id, newData, {
        new: true,
      });

      return dataUpdate;
    },
  };
};

export default crudService;
