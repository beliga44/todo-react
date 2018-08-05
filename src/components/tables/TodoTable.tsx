import * as React from 'react';
import { Component } from 'react';
import { Table }  from 'semantic-ui-react';
import { ITodo } from '../../models/Todo';

interface ITodoTableProps {
    readonly todos: ITodo[];
}

export default class TodoTable extends Component<ITodoTableProps, {}> {
    public render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.props.todos.map(todo => (
                            <Table.Row key = { todo.id }>
                                <Table.Cell>{ todo.title }</Table.Cell>
                                <Table.Cell>{ todo.description }</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        );
    }
}
