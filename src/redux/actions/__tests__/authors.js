import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAllAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/");
      const posts = res.data;
      dispatch({
        type: actionTypes.FETCH_POSTS,
        payload: posts
      });
    } catch (err) {}
  };
};
