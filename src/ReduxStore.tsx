import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ITodoState, todoReducer } from './containers/pages/todos/reducers/TodoReducer';

export const reducer = combineReducers({
    todoReducer
});

export interface IState {
    todoReducer: ITodoState;
}

export const store = createStore(reducer, applyMiddleware(thunk));