import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";

export default function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/new" Component={NewContact} />
        <Route path="/edit/:id" Component={EditContact} />
      </Routes>
    </Router>
  );
}
