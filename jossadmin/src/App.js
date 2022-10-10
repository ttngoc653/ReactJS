import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
