import styled from 'styled-components';

const WrapperStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: min(max(4.4vw, 70px), 85px);
  width: min(max(13.1vw, 200px), 250px);
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
  padding: 15px 0;
`;

const ValueStyled = styled.span`
  font-size: min(max(1.2vw, 18px), 24px);
`;

const TitleStyled = styled.span`
  font-size: min(max(0.6vw, 10px), 12px);
`;

export { WrapperStyled, ValueStyled, TitleStyled };
