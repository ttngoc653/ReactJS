import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {
  ClickMeEvent() {
    console.log('iitititittittttititititti');
  }

  render() {
    var products = [
      {
        product_name: 'MACBOOK AIR (LATE 2020)',
        product_price: '$999',
        product_image: 'https://cdn.vox-cdn.com/thumbor/fg7blk1_lX15F_8NtNgMCi28kgw=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22046471/vpavic_4291_20201113_0411.0.jpg',
        product_status: true
      },
      {
        product_name: 'HP SPECTRE X360 14',
        product_price: '$1.300',
        product_image: 'https://cdn.vox-cdn.com/thumbor/Z0f3OojCwepZUg3tj2Qt6yBG9zo=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22279295/mchin_190429_4395_0002.jpg',
        product_status: false
      },
      {
        product_name: 'DELL XPS 13 2-IN-1',
        product_price: '$1.250',
        product_image: 'https://cdn.vox-cdn.com/thumbor/-Pm8IvVGEiV64P8Nftk47EjhuCI=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22048783/mchin_190211_4302_0012.0.jpg',
        product_status: true
        
      },
      {
        product_name: 'ASUS ROG ZEPHYRUS G14',
        product_price: '$1.150', 
        product_image: 'https://cdn.vox-cdn.com/thumbor/l1Mm1hdxotaAAmZdmP6xwCPhHSE=/0x0:1939x1293/1320x0/filters:focal(0x0:1939x1293):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19855768/awhite_200319_3954_6.jpg',
        product_status: false
      },
      {
        product_name: 'HP ELITE DRAGONFLY',
        product_price: '$2.129',
        product_image: 'https://cdn.vox-cdn.com/thumbor/9G32RjeYrDfT4gCD95FVtZEnC0Y=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19951340/akrales_200507_4005_0212.jpg',
        product_status: true
      }
    ];

    let element_products=products.map((product, index) => {
      let result='';
      if (product.product_status) {
        result= 
        <Product
          product_name={ product.product_name } 
          product_price={ product.product_price } 
          key={ index }
        >
          { product.product_image }
        </Product>;
      }
      return result;
    });

    return (
      <div className="App">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-brand">Props</div>
        </div>
      </nav>  
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12">
              { element_products }
            </div>
            <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12 float-center">
              <button 
                type="button" 
                className="btn btn-info"
                onClick={ this.ClickMeEvent }>Click me!</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
