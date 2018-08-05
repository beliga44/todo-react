import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import TodoPage from './containers/pages/todos/TodoPage';
import './index.css';
import { store } from './ReduxStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store = { store }>
    <TodoPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();