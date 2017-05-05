import React from 'react';
import Signup from './signup';

const Navbar = () => (
  <div>
    <form action="/login" type="GET">
      <div>
        <span> username: </span>
        <input type="text" name="username" placeholder="id" />
      </div>
      <div>
        <span> password: </span>
        <input type="password" name="password" placeholder="password" />
      </div>
    </form>
    
  </div>
);

export default Navbar;
