import React from 'react';
import HelloForm from 'components/helloForm';
import Timer from 'components/timer';
import TimePassed from 'components/timePassed';
import App from 'components/app';

React.render(
  <div>
    <HelloForm />
    <Timer />
    <TimePassed time='2015-08-12 08:45' />
    <br />
    <App />
  </div>,
  document.getElementById('content')
);
