import React from 'react';
import {CurrentDangoProvider} from '../Contexts/CurrentDango';
import {DangoSelection} from './DangoSelection';

export const App = ():JSX.Element => {
  return (
    <div>
      <CurrentDangoProvider>
        <DangoSelection />
      </CurrentDangoProvider>
    </div>
  );
}
