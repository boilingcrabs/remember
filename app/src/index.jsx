import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './component/app';
import Signup from './component/signup';
import Navbar from './component/navbar';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/signup" component={Signup} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />, document.getElementById('app')
);