import React, { Component } from 'react';
import Search from './Search';
import Soft from './Soft';

class Control extends Component {
  render() {
    return (
      <div className="row mt-15">
        <Search />
        <Soft />
      </div>
    );
  }
}

export default Control;
