import UsersList from "./UsersList";
import UserInput from "./UserInput";
import RetrieveUser from "./RetrieveUser";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
