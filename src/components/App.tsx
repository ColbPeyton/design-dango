import React from 'react';
import {CurrentDangoProvider} from '../Contexts/CurrentDango';
import {DangoSelection} from './DangoSelection';
import {Header} from './Header';
import {Footer} from './Footer';
import {DangoStick} from './DangoStick';
import {MakeDango} from './MakeDango';
import { EffectAlert } from './EffectAlert';
import '../styles/App.scss';



export const App = ():JSX.Element => {

  const renderLayout = ():JSX.Element => {
    return(
      <div className='container-dango-selection-stick'>
        <div className='container-dango-stick'>
          <DangoStick />
        </div>
      <div className='container-make-dango'>
        <MakeDango />
      </div>
      <div className='container-dango-selection'>
        <DangoSelection />
      </div>
    </div>
    )
  }

  return (
    <div className='container-app'>
      <CurrentDangoProvider>
        <Header />
        <EffectAlert />
        {renderLayout()}
      </CurrentDangoProvider>
      <Footer />
    </div>
  );
}
