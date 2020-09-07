import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch) => {
    const respons = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: "FETCH_POSTS", payload: respons.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const respons = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );

    dispatch({ type: "FETCH_USER", payload: respons.data });
  };
};
