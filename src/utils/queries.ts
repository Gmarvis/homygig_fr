import { SERVER_URL } from "./constant";
import ApiCall from "./httpClient";

const apiCall = new ApiCall();

type SigUpType = {
  name: string;
  email: string;
  password: string;
};

// SIGN UP
export const SIGNUP = (newUser: SigUpType) => {
  return apiCall.POST(SERVER_URL + "/users/signup", newUser);
};

type LoginType = {
  email: string;
  password: string;
};

// LOGIN
export const LOGIN = (returningUser: LoginType) => {
  // console.log(returningUser);
  return apiCall.POST(SERVER_URL + "/users/login", returningUser);
};

// GET ALL PRODUCT CATEGORIES
export const getAllCategories = () => apiCall.GET(SERVER_URL + "/categories");

// CREATE SERVICE(PRODUCT)
type SevType = {
  user_id: string;
  name: string;
  category_name: string;
  images: [];
  product_image: string;
  price: string;
  category_id: string;
  description: string;
};
export const createService = (serviceDetails: SevType) => {
  return apiCall.POST(SERVER_URL + "/products", serviceDetails);
};

// GET ALL SERVICES
export const getAllServices = () => {
  return apiCall.GET(SERVER_URL + "/products");
};

// GET SERVICE(PRODUCT) BY THE USER_ID
export const getServiceByUserID = (user_id: string) => {
  return apiCall.GET(SERVER_URL + `/products/user/${user_id}`);
};

// GET SINGLE PRODUCT BY PRODUCT ID
export const getServiceByServiceID = (product_id: string): Promise<any> => {
  try {
    return apiCall.GET(`${SERVER_URL}/products/${product_id}`);
  } catch (error: any) {
    return error;
  }
};

// GET SINGLE PRODUCT BY CATEGORY ID
export const getServiceByCategoryID = (category_id: string): Promise<any> => {
  try {
    return apiCall.GET(`${SERVER_URL}/products/category/${category_id}`);
  } catch (error: any) {
    return error;
  }
};
