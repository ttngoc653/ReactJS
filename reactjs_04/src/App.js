import './App.css';

function App() {
  var a = 5;
  var name = 'ngoc hioh';
  var product = {
    id: 'ip7',
    name: 'iPhone 7 Basic',
    price: 16000000,
    status: true
  };
  var users = [
    {
      id: 1,
      name: 'Bob Fejj',
      age: 18
    },
    {
      id: 2,
      name: 'Join Cecar',
      age: 28
    },
    {
      id: 3,
      name: 'Harry Coill',
      age: 38
    }
  ];
  var elements = users.map((user, index) => {
    return (
      <div key={ index }>
        <h2>name user: { user.name }</h2>
        <p>age user: { user.age }</p>
      </div>
      );
  });
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h2>
          a : {a}
        </h2>
        <h3>name : {name}</h3>
        { showProduct(product) }
      </div>
      <div>{ elements }</div>
    </div>
  );
}

function showProduct(product) {
  if (product.status == true) {
    return (
      <div>
            <h5>id: { product.id }</h5>
            <h5>name: { product.name }</h5>
            <h5>price: { product.price } VNĐ</h5>
            <h5>status: { product.status ? 'active' : 'pending' }</h5>
      </div>
    );
  }  
};

export default App;
