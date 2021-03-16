import { PureComponent } from 'react'
import ScrollContext, { ScrollState } from './context'
import { throttle } from '../../helpers/throttle'

class ScrollProvider extends PureComponent<null, ScrollState> {
  state = {
    prevScrollPos: 0,
    currentScrollPos: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = throttle(() => {
    const scrollPos = window.pageYOffset

    const { currentScrollPos } = this.state

    console.log('called')

    this.setState({
      prevScrollPos: currentScrollPos,
      currentScrollPos: scrollPos,
    })
  }, 60)

  render() {
    const { children } = this.props

    return (
      <ScrollContext.Provider value={this.state}>
        {children}
      </ScrollContext.Provider>
    )
  }
}
export default ScrollProvider
