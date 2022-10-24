import axios from "axios";

const API_URL = "/api/items/";

// Get items
const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get filtered items
const getFilteredItems = async (category) => {
  const response = await axios.get(API_URL+"/filter/"+category);
  return response.data;
};

const itemService = {
  getItems,
  getFilteredItems,
};

export default itemService;
