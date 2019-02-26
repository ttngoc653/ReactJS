import React, { Component } from 'react';

class Soft extends Component {
  onClick=(by, value)=>{
    this.props.onSoft(by, value);
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
            Soft <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={()=>this.onClick('name',1)}>
              <a role="button" className="sort_selected">
                <span className="fa fa-soft-alpha-asc pr-5">Name A-Z</span>
              </a>
            </li>
            <li onClick={()=>this.onClick('name',-1)}>
              <a role="button" className="sort_selected">
                <span className="fa fa-soft-alpha-desc pr-5">Name Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={()=>this.onClick('status',1)}>
              <a role="button">Active</a>
            </li>
            <li onClick={()=>this.onClick('status',-1)}>
              <a role="button">Hide</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Soft;
