import * as React from 'react';
import { Component }  from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button, Grid }  from 'semantic-ui-react';
import TodoTable from '../../../components/tables/TodoTable';
import { ITodo } from '../../../models/Todo';
import { IState, store } from '../../../ReduxStore';
import { findTodos, setFilter } from './actions/TodoAction';
import * as constants from './constants/TodoConstant';


interface ITodoPageStateProps {
    todos: ITodo[];
    visibilityFilter: string;
}

interface IDispatchProps {
    findTodos: () => void;
    setFilter: (filter: string) => void;
}

class TodoPage extends Component<ITodoPageStateProps & IDispatchProps, {}> {
    public componentDidMount() {
        this.props.findTodos();
    }

    public filter = (filter:string) => () => {
        this.props.setFilter(filter);
        console.log(store.getState());
    }

    public render() {
        return (
            <Grid columns = { 3 }>
                <Grid.Column/>
                <Grid.Column>
                    <TodoTable todos = { this.props.todos }/>
                    <Button onClick = { this.filter(constants.TODOS_VIEW_ALL) }>Show All</Button>
                    <Button onClick = { this.filter(constants.TODOS_VIEW_OPEN) }>Show Open Todo</Button>
                    <Button onClick = { this.filter(constants.TODOS_VIEW_CLOSED) }>Show Closed Todo</Button>
                </Grid.Column>
            </Grid>
        );
    }
}

const setFilterTodos = (todos: ITodo[], filter: string) =>{
    switch (filter) {
        case constants.TODOS_VIEW_ALL:
            return todos;
        case constants.TODOS_VIEW_OPEN:
            return todos.filter(t => t.status === 'OPEN');
        case constants.TODOS_VIEW_CLOSED:
            return todos.filter(t => t.status === 'CLOSE');
        default:
            return todos;
    }
}

function mapStateToProps(state: IState): ITodoPageStateProps {
    return {
        todos: setFilterTodos(state.todoReducer.todos, state.todoReducer.visibilityFilter),
        visibilityFilter: state.todoReducer.visibilityFilter
    };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
    return {
        findTodos: () => dispatch<any>(findTodos()),
        setFilter: (filter: string) => dispatch<any>(setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoPage);