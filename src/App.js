import React from "react";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PortpholioSchool from "./pages/PortpholioSchool";
import School from "./pages/School";
import Promotion from "./pages/Promotion";
import PortpholioPromotion from "./pages/PortpholioPromotion";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portpholio/school" element={<PortpholioSchool />}></Route>
        <Route
          path="/portpholio/promotion"
          element={<PortpholioPromotion />}
        ></Route>
        <Route path="/school" element={<School />}></Route>
        <Route path="/promotion" element={<Promotion />}></Route>
      </Routes>
    </div>
  );
};

export default App;
