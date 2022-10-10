import "./admin.scss"
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Edit from "./pages/edit/Edit";
import List from "./pages/list/List";
import LogIn from "./pages/login/LogIn";

const Admin = () => {
  return (
    <div basename="/admin">
      <NavBar />
      <SideBar />
      <main className="mt-5 pt-3">
        <div className="container-fluid">
          <Routes>
            <Route exact path="" element={<Dashboard />} />
            <Route exact path="login" element={<LogIn />} />
            <Route exact path="users" element={<List />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="links" element={<List />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="blogs" element={<List />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="products" element={<List />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="groups" element={<List />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="manufacturers" element={<List />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="tools" element={<Dashboard />}>
              <Route exact path=":id" element={<Edit />} />
              <Route exact path="new" element={<Edit />} />
            </Route>
            <Route exact path="settings" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Admin;
