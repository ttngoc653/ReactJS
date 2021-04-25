import React, { Component } from 'react';

class Product extends Component {

  constructor(props) {
    super(props);
    this.ClickBuy = this.ClickBuy.bind(this);
  }

  ClickBuy() {
    console.log(this.props.product_name);
  }

  render() {
    return (
      <div className="Product">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={ this.props.children } alt={ this.props.product_name } />
          <div className="caption">
            <h3>{ this.props.product_name }</h3>
            <p>
              { this.props.product_price } VNĐ
            </p>
            <p>
              <a href="#" className="btn btn-primary" onClick={ this.ClickBuy }>Buy</a>
              <a href="#" className="btn btn-default">Detail</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Product;
