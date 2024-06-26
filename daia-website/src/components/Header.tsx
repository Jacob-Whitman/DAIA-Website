import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Club</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
