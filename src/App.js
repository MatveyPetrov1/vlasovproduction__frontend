import React from "react";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((obj) => (
          <Route path={obj.path} element={obj.element}></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
