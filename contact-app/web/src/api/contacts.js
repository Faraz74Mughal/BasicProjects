import index from "../configuration/index";
const api = {
  get: async () => {
    var response = await index.get("/contacts");
    return response.data;
  },
  post: async (contact) => {
    const response = await index.post("/contacts", contact);
    return response.data;
  },
  put: async (id, contact) => {
    const response = await index.put(`/contacts/${id}`, contact);
    return response.data;
  },
  delete: async (id) => {
    const response = await index.delete(`/contacts/${id}`);
    return response.data;
  },
};

export default api;
