import React, { Component } from 'react';

class Item extends Component {
  onUpdateStatus=()=>{
    this.props.onUpdateStatus(this.props.index);
  }

  onDeleteItem=()=>{
    this.props.onDeleteTask(this.props.index);
  }

  onEditItem=()=>{
    this.props.onEditTask(this.props.index);
  }

  render() {
    var {task, index} = this.props;
    return (
      <tr>
        <td>{index} - {task.id}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span onClick={this.onUpdateStatus}
                className={task.status?"label label-danger":"label label-success"}>{task.status?'Active':'Hide'}</span>
        </td>
        <td className="text-center">
          <button onClick={this.onEditItem}
                  type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span> Replace
          </button>&nbsp;
          <button onClick={this.onDeleteItem}
                  role="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5"></span> Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
