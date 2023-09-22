const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    case "SET_DISTRICT_DATA_LOADING":
      return {
        ...state,
        isDistrictDataLoading: true,
      };

    case "SET_API_DISTRICT_DATA":
      const districtData = action.payload.filter((curDist) => {
        return curDist;
      });

      return {
        ...state,
        isDistrictDataLoading: false,
        districts: districtData,
      };

    case "API_DISTRICT_DATA_ERROR":
      return {
        ...state,
        isDistrictDataLoading: false,
        isError: true,
      };
    case "SET_DISTRICT_LOADING":
      return {
        ...state,
        isDistrictLoading: true,
      };

    case "SET_SINGLE_DISTRICT":
      return {
        ...state,
        isDistrictLoading: false,
        singleDistrict: action.payload,
      };

    case "SET_DISTRICT_ERROR":
      return {
        ...state,
        isDistrictLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
