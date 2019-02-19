import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import List from './component/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: [],
      isDisplayForm: 1,
      taskEditting: null,
      filter: {
        name: '',
        status: -1
      }
    };
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      });
    }
    else
      this.onGenerateData();
    this.onCloseForm();
  }

  onGenerateData = () => {
    var tasks=[
      {
        id: 1,
        name: 'Leard program',
        status: true
      },
      {
        id: 2,
        name: 'Go to swim',
        status: false
      },
      {
        id: 3,
        name: 'Slipe',
        status: false
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

  render() {
    var { tasks, isDisplayForm, taskEditting, filter } = this.state;
    console.log(filter);
    if(filter){
      if (filter.name) {
        tasks=tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase())!==-1;
        });
      }
    }
    var elmTaskForm = isDisplayForm  
    ? <TaskForm onSubmit={this.onSubmit} 
                onCloseForm={this.onCloseForm} 
                task={taskEditting}/> : '';
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
            <Control />
            <div className="row mt-15">
              <List tasks={ tasks } 
                    onUpdateStatus={this.onUpdateStatus} 
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
