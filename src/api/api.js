import axios from "axios";

export const getList = async (page) => {
  let res = await axios.get(
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`
  );
  return res.data.data;
};
