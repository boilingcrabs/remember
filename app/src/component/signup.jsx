import React from 'react';

const Signup = () => (
  <div>
    <form action="/Signup" method="POST">
      <div>
        <span> username: </span>
        <input type="text" name="username" placeholder="id" />
      </div>
      <div>
        <span> password: </span>
        <input type="password" name="password" placeholder="password" />
      </div>
      <input type="submit" value="submit" />
    </form>
  </div>
);

export default Signup;
