import axios from "axios";

//gestion asincronia axios
export const axiosUtil = async (options) => {

  return await axios.request(options).then((res) => res.data);
};
