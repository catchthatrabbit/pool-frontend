import PropTypes from 'prop-types';
import { StyledContainer } from './style';
import { useState, useEffect } from 'react';
import { getDeviceDimensions } from '../../../providers/responsive-provider/utils';
const Container = ({ children, width, paddings }) => {
  const [containerWitdth, setContainerWidth] = useState(width);

  useEffect(() => {
    if (width === 'auto') {
      return `${setContainerWidth(
        getDeviceDimensions().deviceWidth
      )}px`;
    }
  }, [width]);
  return (
    <StyledContainer width={containerWitdth} paddings={paddings}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  paddings: PropTypes.string,
};

export default Container;
