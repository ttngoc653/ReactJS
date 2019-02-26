import React, { Component } from 'react';
import Search from './Search';
import Soft from './Soft';

class Control extends Component {
  render() {
    return (
      <div className="row mt-15">
        <Search onSearch={this.props.onSearch} />
        <Soft onSoft={this.props.onSort}/>
      </div>
    );
  }
}

export default Control;
