import React from 'react';
import {CurrentDangoProvider} from '../Contexts/CurrentDango';
import {DangoSelection} from './DangoSelection';
import {DangoStick} from './DangoStick';

export const App = ():JSX.Element => {
  return (
    <div>
      <CurrentDangoProvider>
        <DangoStick />
        <DangoSelection />
      </CurrentDangoProvider>
    </div>
  );
}
