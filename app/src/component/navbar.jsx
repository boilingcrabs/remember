import React from 'react';

const Navbar = () => (
  <div>
    <form>
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
