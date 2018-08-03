import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import TodoPage from './containers/pages/todos/TodoPage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store } from './ReduxStore';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store = { store }>
    <TodoPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
