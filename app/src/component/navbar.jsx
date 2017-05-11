import React from 'react';
import Signup from './signup';

const Navbar = () => (
  <div>
    <form action="/Signin" method="POST">
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

export default Navbar;
