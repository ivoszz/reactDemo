import React from 'react';
import HelloForm from 'components/helloForm';
import Timer from 'components/timer';
import TimePassed from 'components/timePassed';

React.render(
  <div>
    <HelloForm />
    <Timer />
    <TimePassed time='2015-08-12 08:45' />
  </div>,
  document.getElementById('content')
);
