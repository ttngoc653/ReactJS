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
                        <Route exact path="links" element={<List content="links" />}>
                            <Route exact path=":id" element={<Edit />} />
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="menu" element={<List content="menu" />}>
                            <Route exact path=":id" element={<Edit />} />
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="blogs" element={<List content="blogs" />}>
                            <Route exact path=":id" element={<Edit />} />
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="products" element={<List content="products" />}>
                            <Route exact path=":id" element={<Edit />} />
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="groups" element={<List content="groups" />}>
                            <Route exact path=":id" element={<Edit />} />
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="manufacturers" element={<List content="manufacturers" />}>
                            <Route exact path=":id" element={<Edit />} />
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="users" element={<UserList content="users" />}>
                            <Route exact path="new" element={<Edit />} />
                        </Route>
                        <Route exact path="user/:id" element={<UserEdit />} />
                        <Route exact path="tools" element={<List content="tools" />}>
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
