import React from 'react'
import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'

import "styles/global.css";
import "./decorator.css";

// configure(require.context('../components/Button', true, /\.stories\.js$/), module)
configure(require.context('../components', true, /\.stories\.js$/), module)

addDecorator(storyFn => <div className='decorator-wrapper'>{storyFn()}</div>)
