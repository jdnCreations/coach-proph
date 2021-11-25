import React from 'react';
import classes from './Services.module.css';

const Services = (props) => {
  return (
    <section className={classes.layout}>
      <h1 className={classes.title}>Types of services</h1>
      <a className={classes.dropdown} href='/'>
        One-on-one
      </a>
      <a className={classes.dropdown} href='/'>
        Assessment
      </a>
      <a className={classes.dropdown} href='/'>
        Group Session
      </a>
    </section>
  );
};

export default Services;
