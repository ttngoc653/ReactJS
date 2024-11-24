import "./admin.scss"
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Edit from "./pages/edit/Edit";
import List from "./pages/list/List";
import UserList from "./pages/list/UserList";
import LogIn from "./pages/login/LogIn";
import UserEdit from "./pages/edit/UserEdit";
import UserAdd from "./pages/add/UserAdd";
import CustomAdd from "./pages/add/CustomAdd";

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
                        <Route exact path="links" element={<List content="links" />} />
                        <Route exact path="links/:id" element={<Edit />} />
                        <Route exact path="links/create" element={<CustomAdd />} />
                        <Route exact path="menu" element={<List content="menu" />} />
                        <Route exact path="menu/:id" element={<Edit />} />
                        <Route exact path="menu/create" element={<CustomAdd />} />
                        <Route exact path="blogs" element={<List content="blogs" />} />
                        <Route exact path="blogs/:id" element={<Edit />} />
                        <Route exact path="blogs/create" element={<CustomAdd />} />
                        <Route exact path="products" element={<List content="products" />} />
                        <Route exact path="products/:id" element={<Edit />} />
                        <Route exact path="products/create" element={<CustomAdd />} />
                        <Route exact path="groups" element={<List content="groups" />} />
                        <Route exact path="groups/:id" element={<Edit />} />
                        <Route exact path="groups/create" element={<CustomAdd />} />
                        <Route exact path="manufacturers" element={<List content="manufacturers" />} />
                        <Route exact path="manufacturers/:id" element={<Edit />} />
                        <Route exact path="manufacturers/create" element={<CustomAdd />} />
                        <Route exact path="users" element={<UserList content="users" />} />
                        <Route exact path="users/create" element={<UserAdd />} />
                        <Route exact path="user/:id" element={<UserEdit />} />
                        <Route exact path="tools" element={<List content="tools" />} />
                        <Route exact path="tools/:id" element={<Edit />} />
                        <Route exact path="tools/create" element={<CustomAdd />} />
                        <Route exact path="settings" element={<Dashboard />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default Admin;
