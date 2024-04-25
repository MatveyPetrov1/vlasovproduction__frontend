import Home from "../pages/Home";
import School from "../pages/School";
import Promotion from "../pages/Promotion";
import PortpholioSchool from "../pages/PortpholioSchool";
import PortpholioPromotion from "../pages/PortpholioPromotion";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/school",
    element: <School />,
  },
  {
    path: "/promotion",
    element: <Promotion />,
  },
  {
    path: "/portpholio/school",
    element: <PortpholioSchool />,
  },
  {
    path: "/portpholio/promotion",
    element: <PortpholioPromotion />,
  },
];
