import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import List from './component/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDisplayForm: 1,
      taskEditting: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    };
  }

  onGenerateData = () => {
    var tasks=[
      {
        id: 1,
        name: 'Leard program',
        status: 1
      },
      {
        id: 2,
        name: 'Go to swim',
        status: 0
      },
      {
        id: 3,
        name: 'Slipe',
        status: 0
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  onShowForm = () =>{
    this.setState({
      isDisplayForm: 1
    });
  }

  onShowAndClearForm=()=>{
    this.setState({
      isDisplayForm: 1,
      taskEditting: null
    });
  }

  onCloseForm = () =>{
    this.setState({
      isDisplayForm: 0
    });
  }

  onSubmit=(data)=>{
    var {tasks, taskEditting}=this.state;
    if(taskEditting){
      tasks[data.id].name=data.name;
      tasks[data.id].status=data.status;
      this.setState({
        tasks: tasks,
        taskEditting: null
      });
    }
    else{
      var task = {
        id: tasks.length+1,
        name:data.name,
        status:data.status
      };
      tasks.push(task);
      this.setState({
        tasks:tasks
      });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus=(idx)=>{
    var {tasks}=this.state;
    if(idx!==-1){
      tasks[idx].status=!tasks[idx].status;
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onDeleteTask=(idx)=>{
    var {tasks}=this.state;
      tasks.splice(idx,1);
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onEditTask=(idx)=>{
    var {tasks}=this.state;
    var taskEditting=tasks[idx];
    taskEditting.id=idx;
    this.setState({
      taskEditting: taskEditting
    });
    this.onShowForm();
  }

  onFilter=(fName, fStatus)=>{
    this.setState({
      filter:{
        name: fName,
        status: parseInt(fStatus,10)
      }
    });
  }

  onSearch=(keyword)=>{
    this.setState({
      keyword: keyword,
      filter:{
        name: '',
        status: -1
      }
    });
  }

  onSort=(by, value)=>{
    this.setState({
      sortBy: by,
      sortValue: value
    });
  }

  render() {
    var { isDisplayForm, taskEditting, filter, sortBy, sortValue } = this.state;
    /*if(filter){
      if (filter.name) {
        tasks=tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase())!==-1;
        });
      }
      if(filter.status!==-1) {
        tasks=tasks.filter((task)=>{
          return parseInt(task.status,10)===parseInt(filter.status,10);
        });
      }
    }
    tasks=tasks.filter((task)=>{
      return task.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
    });*/
    var elmTaskForm = isDisplayForm  
    ? <TaskForm onSubmit={this.onSubmit} 
                onCloseForm={this.onCloseForm} 
                task={taskEditting}/> : '';
    /*if(sortBy === 'name'){
      tasks.sort((a,b)=>{
        if(a.name > b.name) return sortValue;
        else if(a.name<b.name) return -sortValue;
        else return 0;
      });
    }else{
      tasks.sort((a,b)=>{
        if(a.status !== b.status) return -sortValue;
        else return 0;
      });
    }*/
    return (
      <div className="container">
        <div className="text-center">
          <h1>Work Management</h1>
        </div>
        <div className="row">
          {elmTaskForm}
          <div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" 
                    onClick={this.onShowAndClearForm}>
              <span className="fa fa-plus mr-5"></span>Add work
            </button>
            <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
              <span className="fa fa-plus mr-5"></span>Generate Data
            </button>
            <Control  onSearch={this.onSearch} 
                      onSort={this.onSort}
            />
            <div className="row mt-15">
              <List onUpdateStatus={this.onUpdateStatus} 
                    onDeleteTask={this.onDeleteTask} 
                    onEditTask={this.onEditTask} 
                    onFilter={this.onFilter} />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
