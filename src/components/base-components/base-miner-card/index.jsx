import { arrayOf, shape, string } from 'prop-types';
import {
  StyledBox,
  StyledTitle,
  StyledInfo,
  StyledDescription,
  StyledLink,
  StyledButton,
} from './style';

const BaseMinerCard = ({ data }) => {
  const { title, description, info, configLink, minerLink } = data;

  return (
    <StyledBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {info.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledInfo key={index}>{item}</StyledInfo>
      ))}
      <StyledLink>
        <a href={configLink} target="_blank" rel="noreferrer noopener">
          Download config file
        </a>
      </StyledLink>
      <StyledButton href={minerLink}>DOWNLOAD MINER</StyledButton>
    </StyledBox>
  );
};

BaseMinerCard.propTypes = {
  data: shape({
    title: string,
    description: string,
    info: arrayOf(string),
    configLink: string,
    minerLink: string,
  }),
};

BaseMinerCard.defaultProps = {
  data: {
    title: 'Title',
    description: 'Description',
    info: ['Some info', 'Some info', 'Some info'],
    configLink: 'https://mega.nz/folder/O4YA2JgD#n2b4iSHQDruEsYUvTQP5_w',
    minerLink: 'https://mega.nz/folder/O4YA2JgD#n2b4iSHQDruEsYUvTQP5_w',
  },
};
export default BaseMinerCard;
