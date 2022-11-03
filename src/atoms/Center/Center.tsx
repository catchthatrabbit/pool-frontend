import styled from 'styled-components';

interface ICenterProps {
  style?: React.CSSProperties
  children: React.ReactNode;
}


const CenterStyled = styled.div<ICenterProps>`
  display: grid;
`

const Center = ({ children, style }: ICenterProps) => (
  <CenterStyled style={style}>
    {children}
  </CenterStyled>
)

export default Center