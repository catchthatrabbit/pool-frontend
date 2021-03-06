import React from 'react'

import "./fonts.css";
import "./decorator.css";
import RootProvider from '../src/providers';

const decorator=(Story,context)=>{
  return (
    <RootProvider>
      <div className='decorator-wrapper'>
        <Story {...context} />
      </div>
    </RootProvider>
  )
}
export const decorators = [decorator];
