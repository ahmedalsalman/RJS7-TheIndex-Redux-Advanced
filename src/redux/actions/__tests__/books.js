import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAllBooks = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/books/");
      const posts = res.data;
      dispatch({
        type: actionTypes.FETCH_POSTS,
        payload: posts
      });
    } catch (err) {}
  };
};
