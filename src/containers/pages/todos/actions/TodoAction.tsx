import { Dispatch } from 'redux';
import { ITodo } from '../../../../models/Todo';
import * as constants from '../constants/TodoConstant';

export interface ISetTodos {
    readonly type: constants.TODOS_SET;
    readonly payload: ITodo[];
}

export interface IViewOpenTodos {
    readonly type: constants.TODOS_VIEW_OPEN;
    readonly payload: ITodo[];
}

export type TodoAction = ISetTodos & IViewOpenTodos;

export function setTodos(payload: ITodo[]): ISetTodos {
    return {
        payload,
        type: constants.TODOS_SET
    };
}

export function viewOpenTodos(payload: ITodo[]): IViewOpenTodos {
    return {
        payload,
        type: constants.TODOS_VIEW_OPEN
    };
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
    }
]

export function findTodos() {
    return (dispatch: Dispatch) => {
        dispatch(setTodos(initialData));
    }
}