import React, { useReducer } from "react";

const StoreContext = React.createContext();

const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
