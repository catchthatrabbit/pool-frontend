/* eslint-disable react/prop-types */
import {
  WrapperStyled,
  StyledRow,
  StyledTitle,
  StyledValue,
  StyledSeperator,
} from './style';

const CommonInfoTable = () => {
  const data = [
    { key: '1', title: 'server', value: '<server>' },
    { key: '2', title: 'port', value: '<port>' },
    { key: '3', title: 'secure port', value: '<secure port>' },
    { key: '4', title: 'user name', value: '<userName>' },
    { key: '5', title: 'password', value: '<Password>' },
  ];
  return (
    <WrapperStyled>
      <StyledSeperator />
      {data.map((row) => (
        <StyledRow key={row.key}>
          <StyledTitle>{row.title}</StyledTitle>
          <StyledValue>{row.value}</StyledValue>
        </StyledRow>
      ))}
    </WrapperStyled>
  );
};

export default CommonInfoTable;
