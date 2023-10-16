import axios from "axios";

// Note: I changed the api source since because of too many request error

export const employeeSvc = axios.create({
  baseURL: "https://hub.dummyapis.com",
  // baseURL: "https://dummy.restapiexample.com/api/v1",
});

export const productSvc = axios.create({
  baseURL: "https://fakestoreapi.com",
  // baseURL: "https://dummy.restapiexample.com/api/v1",
});
