const { commonrequest } = require("./ApiCall");
const { BACKEND_URL } = require("./helper");

export const registerUser = async (data) => {
  return await commonrequest("post", `${BACKEND_URL}/user/login`, data);
};
