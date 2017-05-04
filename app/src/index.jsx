import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />, document.getElementById('app')
);