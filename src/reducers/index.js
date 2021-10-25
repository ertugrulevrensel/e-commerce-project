export const INITIAL_STATE = {
  token: "",
  email: "",
  isAuth: false,
  productList: [],
  categorys: [],
  product: [],
  givenOfferList: [],
  receivedOfferList: [],
  loading: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case "FETCH_PRODUCT":
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case "FETCH_CATEGORY_LIST": {
      return {
        ...state,
        categorys: action.payload,
      };
    }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_ISAUTH":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "FETCH_GIVEN_OFFER":
      return {
        ...state,
        givenOfferList: action.payload,
        loading: false,
      };
    case "FETCH_RECEIVED_OFFER":
      return {
        ...state,
        receivedOfferList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
