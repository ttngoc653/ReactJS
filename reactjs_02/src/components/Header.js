function Header() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <a className="navbar-brand" href="#a">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#a">Home</a>
          </li>
          <li>
            <a href="#a">Link</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Header;
