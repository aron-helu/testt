import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Card = React.lazy(() => import("pages/Card"));
const CARTMODAL = React.lazy(() => import("pages/CARTMODAL"));
const FinanceVersionOne = React.lazy(() => import("pages/FinanceVersionOne"));
const Frame48095564 = React.lazy(() => import("pages/Frame48095564"));
const HOMEPAGEOne = React.lazy(() => import("pages/HOMEPAGEOne"));
const Frame48095563 = React.lazy(() => import("pages/Frame48095563"));
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const COVER = React.lazy(() => import("pages/COVER"));
const WISHLIST = React.lazy(() => import("pages/WISHLIST"));
const ADDRESSES = React.lazy(() => import("pages/ADDRESSES"));
const ORDERS = React.lazy(() => import("pages/ORDERS"));
const ACCOUNT = React.lazy(() => import("pages/ACCOUNT"));
const PRODUCTPAGEREVIEWS = React.lazy(() => import("pages/PRODUCTPAGEREVIEWS"));
const PRODUCTPAGEDESCRIPTION = React.lazy(() =>
  import("pages/PRODUCTPAGEDESCRIPTION")
);
const CARTPAGE = React.lazy(() => import("pages/CARTPAGE"));
const Login7Register = React.lazy(() => import("pages/Login7Register"));
const LoginSeven = React.lazy(() => import("pages/LoginSeven"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginseven" element={<LoginSeven />} />
          <Route path="/login7register" element={<Login7Register />} />
          <Route path="/cartpage" element={<CARTPAGE />} />
          <Route
            path="/productpagedescription"
            element={<PRODUCTPAGEDESCRIPTION />}
          />
          <Route path="/productpagereviews" element={<PRODUCTPAGEREVIEWS />} />
          <Route path="/account" element={<ACCOUNT />} />
          <Route path="/orders" element={<ORDERS />} />
          <Route path="/addresses" element={<ADDRESSES />} />
          <Route path="/wishlist" element={<WISHLIST />} />
          <Route path="/cover" element={<COVER />} />
          <Route path="/homepage" element={<HOMEPAGE />} />
          <Route path="/frame48095563" element={<Frame48095563 />} />
          <Route path="/homepageone" element={<HOMEPAGEOne />} />
          <Route path="/frame48095564" element={<Frame48095564 />} />
          <Route path="/financeversionone" element={<FinanceVersionOne />} />
          <Route path="/cartmodal" element={<CARTMODAL />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
