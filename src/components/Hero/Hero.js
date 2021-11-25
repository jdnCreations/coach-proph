import React from 'react';
import classes from './Hero.module.css';
import centerClass from '../Contain_Center.module.css';

const Hero = (props) => {
  return (
    <section className={classes.layout}>
      <h1 className={classes.title}>transform your game</h1>
      <a href='#book' className={classes.a}>
        book a session
      </a>
    </section>
  );
};

export default Hero;
