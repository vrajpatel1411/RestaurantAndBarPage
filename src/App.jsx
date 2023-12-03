import "./App.css";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

const App = () => (
  <div className="all-selectors">
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;
