import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const Permission = {
  User: "User",
  Admin: "Admin",
};

function App() {
  const user = { login: true, permission: ["Admin"] };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <ProtectedRoutes user={user} Permission={[Permission.Admin]} />
            }
          >
            <Route path="/account" element={<Accounts />} />
          </Route>

          <Route
            element={
              <ProtectedRoutes
                user={user}
                Permission={[Permission.Admin, Permission.User]}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
