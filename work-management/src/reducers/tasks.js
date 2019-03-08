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
      console.log(action);
		default: return state;
	}
	return state;
};

export default myReducer;
