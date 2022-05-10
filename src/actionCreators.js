import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}

export const ADD_CATEGORY = "ADD_CATEGORY"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"
export const ADD_COUNTRY = "ADD_COUNTRY"
export const REMOVE_COUNTRY = "REMOVE_COUNTRY"
export const LOAD_DATA = "LOAD_DATA"
export function addCategory(category) {
    return {
        type: ADD_CATEGORY,
        category
    };
}

export function removeCategory(category) {
    return {
        type: REMOVE_CATEGORY,
        category
    };
}

export function addCountry(country) {
    return {
        type: ADD_COUNTRY,
        country
    };
}

export function removeCountry(country) {
    return {
        type: REMOVE_COUNTRY,
        country
    };
}

export const loadData = data => ({
    type: LOAD_DATA,
    data
})

export const fetchData = () => {
    return dispatch => {
        return apiCall("get", "/api/data/carbon")
        .then(res => {
            dispatch(loadData(res));
        });
    };
};