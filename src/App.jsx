import "./App.css";
import { Suspense, lazy } from "react";

import Loading from "../src/components/Loading/Loading.jsx";

const Lazy_navbar = lazy(() => import("./components/Navbar/Navbar.jsx"));
const Lazy_AboutUS = lazy(() => import("./container/AboutUs/AboutUs.jsx"));
const Lazy_chef = lazy(() => import("./container/Chef/Chef.jsx"));
const Lazy_Header = lazy(() => import("./container/Header/Header.jsx"));
const Lazy_specialMenu = lazy(() => import("./container/Menu/SpecialMenu.jsx"));
const Lazy_Intro = lazy(() => import("./container/Intro/Intro.jsx"));
const Lazy_Laurels = lazy(() => import("./container/Laurels/Laurels.jsx"));
const Lazy_FindUs = lazy(() => import("./container/Findus/FindUs.jsx"));
const Lazy_Gallery = lazy(() => import("./container/Gallery/Gallery.jsx"));
const App = () => (
  <Suspense fallback={<Loading />}>
    <div className="all-selectors">
      <Lazy_navbar />
      <Lazy_Header />
      <Lazy_AboutUS />
      <Lazy_chef />
      <Lazy_specialMenu />
      <Lazy_Intro />
      <Lazy_Laurels />
      <Lazy_Gallery />
      <Lazy_FindUs />
      {/* <Intro />
    <Laurels />
   
    <FindUs />
    <Footer /> */}
    </div>
  </Suspense>
);

export default App;
