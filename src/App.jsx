import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <div className="main">
      <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default App;