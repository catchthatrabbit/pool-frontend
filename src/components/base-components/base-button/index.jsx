/* eslint-disable react/prop-types */
import StyledButton from './style';

const BaseButton = ({
  children,
  disabled,
  onClick,
  size,
  background,
  color,
  outline,
  type,
  height,
}) => {
  const renderButtonText = () => children;

  return (
    <StyledButton
      onClick={onClick ? () => onClick() : null}
      disabled={disabled}
      size={size}
      background={background}
      color={color}
      outline={outline}
      type={type}
      height={height}
    >
      {renderButtonText()}
    </StyledButton>
  );
};
BaseButton.defaultProps = {
  height: '44px',
};

export default BaseButton;
