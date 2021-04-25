import React, { Component } from 'react';

class Product extends Component {

  ClickBuy(text) {
    let show_text = 'Buy ' + text;
    console.log(show_text);
    alert('Way 1\n' + show_text)
  }

  constructor(props) {
    super(props);
    this.ClickDetail = this.ClickDetail.bind(this);
  }

  ClickDetail() {
    let show_text = 'Detail of ' + this.props.product_name;
    console.log(show_text);
    alert('Way 2\n(Condition: must create a constructor) \n' + show_text)
  }

  ClickHide = () => {
    let show_text = 'Hide ' + this.props.product_price;
    console.log(show_text);
    alert('Way 3\n' + show_text)
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
              <button className="btn btn-primary" onClick={ () => { this.ClickBuy(this.props.children) } }>Buy</button>
              <button className="btn btn-default" onClick={ this.ClickDetail }>Detail</button>
              <button className="btn btn-danger" onClick={ this.ClickHide }>Hide</button>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Product;
