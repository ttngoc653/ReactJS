import './sidebar.scss'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div
            className="offcanvas offcanvas-start sidebar-nav bg-dark"
            tabIndex="-1"
            id="sidebar"
        >
            <div className="offcanvas-body p-0">
                <nav className="navbar-dark">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/admin" className="nav-link px-3 active">
                                <span className="me-2">
                                    <i className="bi bi-speedometer2"></i>
                                </span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider bg-light" />
                        </li>
                        <li>
                            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                Functions
                            </div>
                        </li>
                        <li>
                            <Link to="menu" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Menu</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="blogs" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="links" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Links</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="products" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="groups" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Groups</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="manufacturers" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Manufacturers</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="users" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Users</span>
                                <Link to="users/create" style={{ float: 'right', color: 'gray' }}>
                                    <span className="me-0">
                                        <i className="bi bi-plus-square-dotted"></i>
                                    </span>
                                </Link>
                            </Link>
                        </li>
                        <li>
                            <Link to="tools" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span>Tools</span>
                            </Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider bg-light" />
                        </li>
                        <li>
                            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                Another
                            </div>
                        </li>
                        <li>
                            <Link to="settings" className="nav-link px-3">
                                <span className="me-2">
                                    <i className="bi bi-graph-up"></i>
                                </span>
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-link px-3 sidebar-link"
                                data-bs-toggle="collapse"
                                to="#themesAdmin"
                            >
                                <span className="me-2">
                                    <i className="bi bi-layout-split"></i>
                                </span>
                                <span>Theme Admin</span>
                                <span className="ms-auto">
                                    <span className="right-icon">
                                        <i className="bi bi-chevron-down"></i>
                                    </span>
                                </span>
                            </Link>
                            <div className="collapse" id="themesAdmin">
                                <ul className="navbar-nav ps-3">
                                    <li>
                                        <Link onClick={console.log("click mode Light")} className="nav-link px-3">
                                            <span className="me-2">
                                                <i className="bi bi-speedometer2"></i>
                                            </span>
                                            <span>Light</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={console.log("click mode Dark")} className="nav-link px-3">
                                            <span className="me-2">
                                                <i className="bi bi-speedometer2"></i>
                                            </span>
                                            <span>Dark</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
