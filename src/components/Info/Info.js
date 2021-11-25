import React from 'react';
import classes from './Info.module.css';

const Info = (props) => {
  return (
    <section className={classes.layout}>
      <h1 className={classes.title}>Valorant Coaching</h1>
      <p className={classes.desc}>
        Need help with what you’re doing wrong?I have over 10 years experience
        in FPS games, and currently Immortal in Valorant.
      </p>
    </section>
  );
};

export default Info;
