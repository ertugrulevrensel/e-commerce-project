import axios from "axios";

export const getProductList = () => (dispatch) => {
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
    .then((res) =>
      dispatch({
        type: "FETCH_PRODUCT_LIST",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: "FETCH_PRODUCT_LIST",
        payload: err.response.status,
      });
    });
};
export const getCategory = () => (dispatch) => {
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then((res) =>
      dispatch({
        type: "FETCH_CATEGORY_LIST",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: "FETCH_CATEGORY_LIST",
        payload: err.response.status,
      });
    });
};
export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};
export const setIsAuth = (auth) => {
  return {
    type: "SET_ISAUTH",
    payload: auth,
  };
};
export const setEmail = (mail) => {
  return {
    type: "SET_EMAIL",
    payload: mail,
  };
};
export const setCategoryID = (id) => {
  return {
    type: "SET_CATEGORYID",
    payload: id,
  };
};
export const getProduct = (id) => async (dispatch) => {
  await axios(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`).then(
    (res) => {
      dispatch({
        type: "FETCH_PRODUCT",
        payload: res.data,
      });
    }
  );
};
export const getGivenOfferList = (token) => (dispatch) => {
  axios("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers", {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => {
    dispatch({
      type: "FETCH_GIVEN_OFFER",
      payload: res.data,
    });
  });
};
export const getReceivedOfferList = (token) => (dispatch) => {
  axios("https://bootcampapi.techcs.io/api/fe/v1/account/received-offers", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    dispatch({
      type: "FETCH_RECEIVED_OFFER",
      payload: res.data,
    });
  });
};
export const cancelOffer = (id, token) => {
  return axios.delete(
    `https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
export const giveOffer = (id, token, price) => {
  return fetch(`https://bootcampapi.techcs.io/api/fe/v1/product/offer/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ offeredPrice: Number(price.toFixed(2)) }),
  });
};
export const buyProduct = (id, token) => {
  return fetch(
    `https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(id),
    }
  );
};
export const signInProcess = (data) => (dispatch) => {
  return axios.post(
    "https://bootcampapi.techcs.io/api/fe/v1/authorization/signin",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const signUpProcess = (data) => (dispatch) => {
  return axios.post(
    "https://bootcampapi.techcs.io/api/fe/v1/authorization/signup",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
