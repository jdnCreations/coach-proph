import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.logoDiv}>
        <a className={classes.logo} href='/'>
          coach
        </a>
        <a className={classes.proph} href='/'>
          proph
        </a>
      </div>

      <a className={classes.book} href='#book'>
        book session
      </a>
    </header>
  );
};

export default Header;
