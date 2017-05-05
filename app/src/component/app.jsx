import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>Hello World!</span><br/>
        <Link to="signup"> Sign up! </Link>
      </div>
    );
  }
}

export default App;
