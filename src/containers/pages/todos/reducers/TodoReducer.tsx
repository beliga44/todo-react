import { ITodo } from '../../../../models/Todo';

export interface ITodoState {
    readonly todos : ITodo[];
}

const initialState: ITodoState = {
    todos: [
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
        }
    ]
}

export function todoReducer(state: ITodoState = initialState): ITodoState {
    return state;
}