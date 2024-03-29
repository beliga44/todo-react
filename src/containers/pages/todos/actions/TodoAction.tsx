import { Dispatch } from 'redux';
import { ITodo } from '../../../../models/Todo';
import * as constants from '../constants/TodoConstant';

export interface ISetTodos {
    readonly todos: ITodo[];
    readonly type: constants.TODOS_SET;
}

export interface ISetVisibilty {
    readonly todos: ITodo[];
    readonly type: constants.TODOS_SET_VISIBILTY;
    readonly filter: string;
}

export interface IAddTodo {
    readonly description: string;
    readonly id: number;
    readonly title: string;
    readonly type: constants.TODOS_ADD;
}

export type TodoAction = ISetTodos | ISetVisibilty | IAddTodo;

export function setTodos(todos: ITodo[]): ISetTodos {
    return {
        todos,
        type: constants.TODOS_SET
    };
}

export function setVisibility(filter = constants.TODOS_VIEW_ALL) {
    return {
        filter,
        type: constants.TODOS_SET_VISIBILTY
    }
}

let lastId = 4;
export function addTodo(title: string, description: string): IAddTodo {
    return {
        description,
        id: ++lastId,
        title,
        type: constants.TODOS_ADD
    }
}

const initialData: ITodo[] = [
    {
        createdAt: '2018-07-01T00:00:00',
        description: 'Desc 1',
        id: 0,
        status: 'OPEN',
        title: 'Title 1'
    },
    {
        createdAt: '2018-07-01T00:00:00',
        description: 'Desc 2',
        id: 1,
        status: 'OPEN',
        title: 'Title 2'
    },
    {
        createdAt: '2018-07-01T00:00:00',
        description: 'Desc 3',
        id: 2,
        status: 'OPEN',
        title: 'Title 3'
    },
    {
        createdAt: '2018-07-01T00:00:00',
        description: 'Desc 4',
        id: 3,
        status: 'CLOSE',
        title: 'Title 4'
    },
    {
        createdAt: '2018-07-01T00:00:00',
        description: 'Desc 5',
        id: 4,
        status: 'CLOSE',
        title: 'Title 5'
    }
]

/**
 * Dispatching actions
 */

export function findTodos() {
    return (dispatch: Dispatch) => {
        dispatch(setTodos(initialData));
    }
}

export function setFilter(filter: string) {
    return (dispatch: Dispatch) => {
        dispatch(setVisibility(filter));
    }
}

export function createTodo(title: string, description: string) {
    return (dispatch: Dispatch) => {
        dispatch(addTodo(title, description));
    }
}