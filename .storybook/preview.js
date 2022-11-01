import { RouterContext } from 'next/dist/shared/lib/router-context';
import 'styles/fonts.css'
import './decorator.css'
import RootProvider from '../src/providers'

const decorator = (Story, context) => {
  return (
    <RootProvider>
      <div className="decorator-wrapper">
        <Story {...context} />
      </div>
    </RootProvider>
  )
}
export const decorators = [decorator]

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}
  },
}
