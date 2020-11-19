import { string } from 'prop-types';

import { WrapperStyled, ValueStyled, TitleStyled } from './style';

const CommonInfoBox = ({ value, title }) => (
  <WrapperStyled>
    <ValueStyled>{value}</ValueStyled>
    <TitleStyled>{title}</TitleStyled>
  </WrapperStyled>
);

CommonInfoBox.propTypes = {
  value: string,
  title: string,
};

CommonInfoBox.defaultProps = {
  value: '10 units',
  title: 'title',
};

export default CommonInfoBox;
