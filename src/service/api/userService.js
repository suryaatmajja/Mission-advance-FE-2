import userApi from "./userApi";

export const getData = async () => {
  const res = await userApi.get("/users");
  return res.data;
};

export const createData = async (newUser) => {
  const res = await userApi.post("/users", newUser);
  return res.data;
};

export const updateData = async (id, updatedUser) => {
  const res = await userApi.put(`/users/${id}`, updatedUser);
  return res.data;
};

export const deleteData = async (id) => {
  await userApi.delete(`/users/${id}`);
  return id;
};
