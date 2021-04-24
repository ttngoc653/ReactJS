import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand">Props</a>
        </div>
      </nav>  
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12">
              <Product 
                product_name='MACBOOK AIR (LATE 2020)'
                product_price='$999' 
              >https://cdn.vox-cdn.com/thumbor/fg7blk1_lX15F_8NtNgMCi28kgw=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22046471/vpavic_4291_20201113_0411.0.jpg</Product>
              <Product 
                product_name='HP SPECTRE X360 14'
                product_price='$1.300' 
              >https://cdn.vox-cdn.com/thumbor/Z0f3OojCwepZUg3tj2Qt6yBG9zo=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22279295/mchin_190429_4395_0002.jpg</Product>
              <Product 
                product_name='DELL XPS 13 2-IN-1'
                product_price='$1.250' 
              >https://cdn.vox-cdn.com/thumbor/-Pm8IvVGEiV64P8Nftk47EjhuCI=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22048783/mchin_190211_4302_0012.0.jpg</Product>
              <Product 
                product_name='ASUS ROG ZEPHYRUS G14'
                product_price='$1.150' 
              >https://cdn.vox-cdn.com/thumbor/l1Mm1hdxotaAAmZdmP6xwCPhHSE=/0x0:1939x1293/1320x0/filters:focal(0x0:1939x1293):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19855768/awhite_200319_3954_6.jpg</Product>
              <Product 
                product_name='HP ELITE DRAGONFLY'
                product_price='$2.129' 
              >https://cdn.vox-cdn.com/thumbor/9G32RjeYrDfT4gCD95FVtZEnC0Y=/0x0:2040x1360/1320x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19951340/akrales_200507_4005_0212.jpg</Product>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
