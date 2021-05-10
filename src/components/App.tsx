import React,{useState, useEffect} from 'react';
import {CurrentDangoProvider} from '../Contexts/CurrentDango';
import {DangoSelection} from './DangoSelection';
import {Header} from './Header';
import {Footer} from './Footer';
import {DangoStick} from './DangoStick';
import {MakeDango} from './MakeDango';
import { EffectAlert } from './EffectAlert';
import '../styles/App.scss';

interface AppState{
  width: number;
}

export const App = ():JSX.Element => {
  const [width, setWidth] = useState<AppState['width']>(window.innerWidth);

  // Header will change based on size of screen, detect change in width
  useEffect(()=>{
      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      }


  })

  const updateWidth = ():void =>{
    setWidth(window.innerWidth);
  }

  const renderSmallLayout = ():JSX.Element => {
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

  const renderLargeLayout = ():JSX.Element => {
    return(
      <div className='container-dango-selection-stick'>
        <div className='container-large-layout'>
          <div className='container-dango-stick'>
            <DangoStick />
          </div>
          <div className='container-dango-selection'>
            <DangoSelection />
          </div>
        </div>  
      <div className='container-make-dango'>
        <MakeDango />
      </div>
    </div>
    )
  }

  const renderBasedOnWidth = ():JSX.Element => {
    return width <= 1024
    ? renderSmallLayout()
    : renderLargeLayout()
  }
  return (
    <div className='container-app'>
      <CurrentDangoProvider>
        <Header />
        <EffectAlert />
        {renderBasedOnWidth()}
      </CurrentDangoProvider>
      <Footer />
    </div>
  );
}
