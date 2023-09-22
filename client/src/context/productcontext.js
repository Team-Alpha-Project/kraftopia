import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isError: false,

  isLoading: false,
  products: [],
  featureProducts: [],

  isDistrictDataLoading: false,
  districts: [],

  isSingleLoading: false,
  singleProduct: {},

  isDistrictLoading: false,
  singleDistrict: {},
};
// dispatch calls the action method of the products reducers
const AppProvider = ({ children }) => {
  // state is verything what is there but the dispatch make the work we want from reducer action
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // what we wanna accesss and payload is to do the job what all is needed
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getDistricts = async (url) => {
    dispatch({ type: "SET_DISTRICT_DATA_LOADING" });
    try {
      const res = await axios.get(url);
      const districts = await res.data;
      // what we wanna accesss and payload is to do the job what all is needed
      dispatch({ type: "SET_API_DISTRICT_DATA", payload: districts });
    } catch (error) {
      dispatch({ type: "API_DISTRICT_DATA_ERROR" });
    }
  };

  // 2nd api caall for single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  // 3rd api call for single district
  const getSingleDistrict = async (url) => {
    dispatch({ type: "SET_DISTRICT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleDistrict = await res.data;
      dispatch({ type: "SET_SINGLE_DISTRICT", payload: singleDistrict });
    } catch (error) {
      dispatch({ type: "SET_DISTRICT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []); //array dependecy ekk barr chaelga

  return (
    <AppContext.Provider
      value={{ ...state, getSingleProduct, getDistricts, getSingleDistrict }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
