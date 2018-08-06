import * as React from 'react';
import { Component }  from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button, Grid, Input }  from 'semantic-ui-react';
import TodoTable from '../../../components/tables/TodoTable';
import { ITodo } from '../../../models/Todo';
import { IState, store } from '../../../ReduxStore';
import { createTodo, findTodos, setFilter } from './actions/TodoAction';
import * as constants from './constants/TodoConstant';

interface ITodoPageStateProps {
    todos: ITodo[];
    visibilityFilter: string;
}

interface IDispatchProps {
    findTodos: () => void;
    setFilter: (filter: string) => void;
    createTodo: (description: string, title: string) => void;
}

interface ITodoState {
    description: string;
    id: number;
    title: string;
}

class TodoPage extends Component<ITodoPageStateProps & IDispatchProps, ITodoState> {
    constructor(props:any) {
        super(props);
        this.state = {
            description: '',
            id: 0,
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange = (event: any) => {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        switch (input.id) {
        case "todo-title":
            return this.setState({ title: input.value } as ITodoState);
        case "todo-desc":
            return this.setState({ description: input.value } as ITodoState);
        }
    }

    public componentDidMount() {
        this.props.findTodos();
    }

    public filter = (filter: string) => () => {
        this.props.setFilter(filter);
        console.log(store.getState());
    }

    public add = (title: string, description: string) => () => {
        this.props.createTodo(title, description);
    }

    public render() {
        return (
            <Grid columns = { 3 }>
                <Grid.Column/>
                <Grid.Column>
                    <Input id="todo-title" placeholder = "Add todo ..." onChange = { this.handleChange } />
                    <Input id="todo-desc" placeholder = "Add description ..." onChange = { this.handleChange } />
                    <Button onClick = { this.add(this.state.title, this.state.description)} >Add todo</Button>
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

/**
 * Change Listener
 * @param state IState
 */
function mapStateToProps(state: IState): ITodoPageStateProps {
    return {
        todos: setFilterTodos(state.todoReducer.todos, state.todoReducer.visibilityFilter),
        visibilityFilter: state.todoReducer.visibilityFilter
    };
}

/**
 * Register Action Creator
 * @param dispatch Dispatch
 */
function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
    return {
        createTodo: (title: string, description: string) => dispatch<any>(createTodo(title, description)),
        findTodos: () => dispatch<any>(findTodos()),
        setFilter: (filter: string) => dispatch<any>(setFilter(filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoPage);