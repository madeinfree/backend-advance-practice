/* eslint global-require: 0 */
/* eslint max-len: 0 */
// React core
import React from 'react';
import { render } from 'react-dom';

// Relay
import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';
import { QueryRenderer } from 'react-relay';

// React Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './container/common/header/header.react';
import Footer from './container/common/footer/footer.react';
import Welcome from './container/welcome/welcome.react';
import Home from './container/home/home.react';
import Todo from './container/todo/todo.react';
import Example from './container/example/example.react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './lib/bootstrap/dist/bootstrap.min.css';

const store = configureStore();

// Relay Client
const fetchQuery = ({ text }, variables) =>
  fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  }).then(response => response.json());
const source = new RecordSource();
const relayStore = new Store(source);
const network = Network.create(fetchQuery);
const environment = new Environment({
  network,
  store: relayStore
});

const App = () =>
  <Provider store={ store }>
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={ Welcome } />
        <Route path='/home' component={ Home } />
        <Route
          path='/todo'
          component={ props =>
            <QueryRenderer
              environment={ environment }
              query={ require('../server/graphql/model/Todo/client/__generated__/TodosQuery.graphql') }
              render={ queryProps =>
                <Todo
                  queryResult={ queryProps }
                  environment={ environment }
                  { ...props } /> } /> } />
        <Route path='/example' component={ Example } />
        <Footer />
      </div>
    </Router>
  </Provider>;

render(<App />, document.getElementById('app'));

export default App;
