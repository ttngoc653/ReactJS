import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../act/index';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id: '',
      name: '',
      status: false
    }
  }

  onChange = (event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name==='status')
      value=target.value==="true"?1:0;
    this.setState({
      [name]: value
    });
  }

  onCloseForm = () =>{
    this.props.onCloseForm();
  }

  onSubmit =(event)=>{
    event.preventDefault(); 
    this.props.onAddTask(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = ()=>{
    this.setState({
      id:'',
      name:'',
      status: false
    });
  }

  componentWillMount(){
    if(this.props.task){
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
    else
      this.onClear();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.task)
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
    else
      this.onClear();
  }

  render() {
    var {id}=this.state;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {id!==''?"Update":"Add"} Task
              <span className="fa fa-times-circle text-right" 
                    onClick={this.onCloseForm}></span>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Tên:</label>
                <input type="text" className="form-control" 
                        name="name" value={this.state.name} 
                        onChange={this.onChange}/>
              </div>
              <label htmlFor="status">Statu:</label>
              <select name="status" className="form-control"
                      value={this.state.status} onChange={this.onChange}>
                <option value={true}>Active</option>
                <option value={false}>Hide</option>
              </select><br/>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  <span className="fa fa-plus mr-5"></span> Save
                </button>&nbsp;
                <button type="button" className="btn btn-danger"
                        onClick={this.onClear}>
                  <span className="fa fa-close mr-5"></span> Cannel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {

  }
};

const mapDispatchToProps=(dispatch, props)=>{
  return {
    onAddTask:(task)=>{
      dispatch(actions.addTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
