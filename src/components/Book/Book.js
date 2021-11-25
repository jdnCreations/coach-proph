import React, { useState } from 'react';
import classes from './Book.module.css';
import emailjs from 'emailjs-com';
require('dotenv').config();
emailjs.init(process.env.USER_ID);

const Book = (props) => {
  const [sessionType, setSessionType] = useState('one-on-one');
  const [sessionLength, setSessionLength] = useState(1);
  const [contact, setContact] = useState('');

  function checkValues() {
    console.log('testing');
  }

  function getPrice() {
    return sessionLength * 20;
  }

  return (
    <section id='book' className={classes.layout} onLoad={checkValues}>
      <h1 className={classes.title}>Book a Session</h1>
      <form id='contact-form'>
        <div>
          <label htmlFor='sessionType'>Session Type</label>
          <select
            name='sessionType'
            id='sessionType'
            onChange={(e) => {
              setSessionType(e.target.value);
              console.log('set session length to ' + e.target.value);
            }}
          >
            <option value='one-on-one'>One-on-one</option>
            <option value='assessment'>Assessment</option>
            <option value='group-session'>Group Session</option>
          </select>
        </div>

        <div>
          <label htmlFor='sessionLength'>Session Length</label>
          <select
            onChange={(e) => {
              setSessionLength(e.target.value);
              console.log('set session length to ' + e.target.value);
            }}
            name='sessionLength'
            id='sessionLength'
          >
            <option value='1'>1 hour</option>
            <option value='2'>2 hours</option>
            <option value='3'>3 hours</option>
            <option value='4'>4 hours</option>
          </select>
        </div>

        {/* <div>
          <label htmlFor='contact'>
            Contact Info <span>(discord, email, etc)</span>
          </label>
          <textarea
            type='text'
            name='contact'
            id='contact'
            placeholder='james#4200'
          />
        </div> */}

        <button>BOOK</button>
      </form>
    </section>
  );
};

export default Book;
