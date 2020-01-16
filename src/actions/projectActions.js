import { GET_PROJECTS, SET_LOADING } from "./types";

export const getProjects = () => {
  return {
    type: GET_PROJECTS
  };
};

// Set loading to True
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
