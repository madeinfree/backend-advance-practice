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
import { QueryRenderer, graphql } from 'react-relay';

// React Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './container/common/header/header.react';
import Footer from './container/common/footer/footer.react';
import Welcome from './container/welcome/welcome.react';
import Home from './container/home/home.react';
import Example from './container/example/example.react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './lib/bootstrap/dist/bootstrap.min.css';

const store = configureStore();

// Relay Client
const fetchQuery = ({ text }) =>
  fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: text
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
        <QueryRenderer
          environment={ environment }
          query={ graphql`
            query indexQuery {
              todos {
                objectId
                title
                content
              }
            }
          ` }
          render={ ({ props }) =>
            <div>
              { props && props.todos
                ? props.todos.map(todo =>
                    <div key={ todo.objectId }>
                      ObjectId => { todo.objectId } { '  ' }
                      title => { todo.title } { '  ' }
                      content => { todo.content } { '  ' }
                    </div>
                  )
                : 'Loading...' }
            </div> } />
        <Route exact path='/' component={ Welcome } />
        <Route path='/home' component={ Home } />
        <Route path='/example' component={ Example } />
        <Footer />
      </div>
    </Router>
  </Provider>;

render(<App />, document.getElementById('app'));

export default App;
