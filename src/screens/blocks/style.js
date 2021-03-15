import styled from 'styled-components'

const BoxesWrapperStyled = styled.ul`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    display: flex;
    justify-content: center;
    flex-basis: 25%;
    margin-top: 20px;
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.mobileDevice.medium}) {
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    li {
      margin-top: 50px;
    }
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.mobileDevice.large}) {
    justify-content: space-between;
  }
`

export { BoxesWrapperStyled }
