import Role from "../models/Role";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    const promise = [
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ];
    await Promise.all(promise);
    return;
  } catch (err) {
    console.error(err);
  }
};
