import UsersList from "./user/UsersList";
import UserInput from "./user/UserInput";
import RetrieveUser from "./user/RetrieveUser";
import EditUser from "./user/EditUser";
import RemoveUser from "./user/RemoveUser";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
