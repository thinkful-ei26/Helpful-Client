import React from "react";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = (state, action) => {
  return {
    auth: authReducer(state.auth, action),
    error: errorReducer(state.error, action)
  };
};

export default rootReducer;
