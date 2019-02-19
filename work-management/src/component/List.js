import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      filterName: '',
      filterStatus: 2
    };
  }

  onChange=(event)=>{
    var name=event.target.name;
    var value=event.target .value;
    this.props.onFilter(
      name==='filterName'?value:this.state.filterName,
      name==='filterStatus'?value:this.state.filterStatus);
    this.setState({
      [name]:value
    });
  }

  render() {
    var {tasks} = this.props;
    var {filterName,filterStatus}=this.state;
    var elmTasks = tasks.map((task, index) => {
      return <Item key={task.id} 
                    index={index} 
                    task={task} 
                    onUpdateStatus={this.props.onUpdateStatus}
                    onDeleteTask={this.props.onDeleteTask}
                    onEditTask={this.props.onEditTask}/>
    })
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover mt-15">
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" 
                        className="form-control" 
                        name="filterName" 
                        value={filterName} 
                        onChange={this.onChange} />
              </td>
              <td>
                <select name="filterStatus" 
                        className="form-control" 
                        value={filterStatus} 
                        onChange={this.onChange}>
                  <option value={-1}>All</option>
                  <option value={0}>Hide</option>
                  <option value={1}>Active</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTasks}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
