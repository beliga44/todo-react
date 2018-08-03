import * as React from 'react';
import { Component }  from 'react';
import { Grid }  from 'semantic-ui-react';
import TodoTable from '../../../components/tables/TodoTable';
import { ITodo } from '../../../models/Todo';

interface ITodoPageState {
    todos: ITodo[];
}

export default class TodoPage extends Component<{}, ITodoPageState> {
    public constructor(state: ITodoPageState) {
        super(state);

        this.state = {
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
                },
            ]
        }
    }

    public render() {
        return (
            <Grid columns = { 3 }>
                <Grid.Column/>
                <Grid.Column>
                    <TodoTable todos = { this.state.todos }/>
                </Grid.Column>
            </Grid>
        );
    }
}