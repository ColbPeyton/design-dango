import React from 'react';
import {CurrentDangoProvider} from '../Contexts/CurrentDango';
import {DangoSelection} from './DangoSelection';
import {DangoStick} from './DangoStick';
import '../styles/App.scss';

export const App = ():JSX.Element => {
  return (
    <div className='container-app'>
      <CurrentDangoProvider>
        <DangoStick />
        <DangoSelection />
      </CurrentDangoProvider>
    </div>
  );
}
