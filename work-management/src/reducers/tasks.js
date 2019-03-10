import * as types from '../const/ActTypes'

var initialState = (localStorage && localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) :
	[
      {
        id: 1,
        name: 'Leard program',
        status: 1
      },
      {
        id: 2,
        name: 'Go to swim',
        status: 0
      }
    ];

var myReducer=(state=initialState, action)=>{
	switch(action.type){
		case types.LIST_ALL: return state; break;
    case types.ADD_TASK: 
      var newTask = {
        id: initialState.length + 1,
        name: action.task.name,
        status: action.task.status
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
		default: return state;
	}
	return state;
};

export default myReducer;
