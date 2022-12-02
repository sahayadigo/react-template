import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Support from "./pages/Support";
import Product from "./pages/Product";
import Sidebar from "./components/Sidebar/Sidebar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import Footer from "./components/Footer";

const App = () => {
  //return <Home/>;
  return (
    <div style={{background: "red", padding: "20px"}}>
    <div className="main">
      <Sidebar />
      <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
      </div>
    </div>
    <div style={{background:"#d1d1d1", borderRadius: "0px 0px 15px 15px"}}>
      <Footer />
    </div>
    </div>
  );
};

export default App;