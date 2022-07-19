import React, { useEffect } from "react";
import ViewRoutes from "./ViewRoutes";
import "./styles/global.scss";
import { useDispatch } from "react-redux";
import { getToken } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  // console.log(access_token);
  // console.log(token_type);
  return (
    <>
      <ViewRoutes />
    </>
  );
}

export default App;
