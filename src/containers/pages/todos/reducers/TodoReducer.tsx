import { ITodo } from '../../../../models/Todo';
import { TodoAction } from '../actions/TodoAction';
import * as constants from '../constants/TodoConstant';

export interface ITodoState {
    readonly todos : ITodo[];
}

const initialState: ITodoState = {
    todos: []
}

export function todoReducer(state: ITodoState = initialState, action: TodoAction): ITodoState {
    switch (action.type) {
        case constants.TODOS_SET: 
            return Object.assign({}, {...state, todos: action.payload});
        case constants.TODOS_VIEW_OPEN:
            
        default:
            return state;
    }

}