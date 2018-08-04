import * as React from 'react';
import { Component }  from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Grid }  from 'semantic-ui-react';
import TodoTable from '../../../components/tables/TodoTable';
import { ITodo } from '../../../models/Todo';
import { IState } from '../../../ReduxStore';
import { findTodos } from './actions/TodoAction';

interface ITodoPageStateProps {
    todos: ITodo[];
}

interface IDispatchProps {
    findTodos: () => void;
}

class TodoPage extends Component<ITodoPageStateProps & IDispatchProps, {}> {
    public  componentDidMount() {
        this.props.findTodos();
    }

    public render() {
        return (
            <Grid columns = { 3 }>
                <Grid.Column/>
                <Grid.Column>
                    <TodoTable todos = { this.props.todos }/>
                </Grid.Column>
            </Grid>
        );
    }
}

function mapStateToProps(state: IState): ITodoPageStateProps {
    return {
        todos: state.todoReducer.todos
    };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
    return {
        findTodos: () => dispatch<any>(findTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoPage);