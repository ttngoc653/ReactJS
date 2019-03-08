import * as types from '../const/ActTypes'

export const listAll= ()=>{
	return {
		type: types.LIST_ALL
	}
};

export const addTask=(task)=>{
	return {
		type: types.ADD_TASK,
		task
	}
};