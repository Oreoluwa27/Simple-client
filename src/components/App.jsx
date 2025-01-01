import UsersList from "../pages/user/UsersList";
import UserInput from "../pages/user/UserInput";
import RetrieveUser from "../pages/user/RetrieveUser";
import EditUser from "../pages/user/EditUser";
import RemoveUser from "../pages/user/RemoveUser";
import Contact from "../pages/static/Contact";
import AboutUs from "../pages/static/AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UsersList />}></Route>
          <Route path="/add" element={<UserInput />}></Route>
          <Route path="/:userId" element={<RetrieveUser />}></Route>
          <Route path="/edit/:userId" element={<EditUser />}></Route>
          <Route path="/remove/:userId" element={<RemoveUser />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
