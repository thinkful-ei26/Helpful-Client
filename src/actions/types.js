export const GET_ERRORS = "GET_ERRORS";
export const getErrors = error => ({
  type: GET_ERRORS,
  error
});

export const USER_LOADING = "USER_LOADING";
export const userLoading = () => ({
  type: USER_LOADING
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const setCurrentUser = decoded => {
  return { type: SET_CURRENT_USER, payload: decoded };
};
