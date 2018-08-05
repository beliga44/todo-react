import { ITodo } from '../../../../models/Todo';
import { TodoAction } from '../actions/TodoAction';
import * as constants from '../constants/TodoConstant';

export interface ITodoState {
    readonly todos: ITodo[];
    readonly visibilityFilter: string;
}

const initialState: ITodoState = {
    todos: [],
    visibilityFilter: constants.TODOS_VIEW_ALL
}

export function todoReducer(state: ITodoState = initialState, action: TodoAction): ITodoState {
    switch (action.type) {
        case constants.TODOS_SET: 
            return Object.assign({}, {...state, todos: action.todos});
        case constants.TODOS_SET_VISIBILTY:
            return Object.assign({}, { ...state }, {
                visibilityFilter: action.filter
            });
        default:
            return state;
    }

}