import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// Component
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Career from "./Components/Career";
import Products from "./Components/Products";
import Gallary from "./Components/Gallary";
import ProBiotics from "./Components/ProBiotics";
import R_and_D from "./Components/R_and_D";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <BreadcrumbsProvider>
        <Router basename={"/agro-care"}>
          <Routes>
            <Route path={`/`} element={<Home />} />

            <Route exact path={"/about"} element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/career" element={<Career />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/gallary" element={<Gallary />} />
            <Route exact path="/probiotics" element={<ProBiotics />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/r_and_d" element={<R_and_D />} />
          </Routes>
        </Router>
      </BreadcrumbsProvider>
    </>
  );
}

export default App;
