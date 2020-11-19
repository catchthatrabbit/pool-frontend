import styled from 'styled-components';

const StyledPadding = styled.div`
  ${({ theme, x }) =>
    //   x axis margin (right and left)
    x &&
    `padding-right: ${theme.dimensions[x]};
    padding-left: ${theme.dimensions[x]}`};

  ${({ theme, y }) =>
    // y axis margin (bottom and top)
    y &&
    `padding-top: ${theme.dimensions[y]};
    padding-bottom: ${theme.dimensions[y]}`};

  ${({ theme, right }) =>
    // right  margin

    right &&
    `padding-right: ${theme.dimensions[right]};
                        `};

  ${({ theme, left }) =>
    // left  margin
    left &&
    `padding-left: ${theme.dimensions[left]};
                      `};

  ${({ theme, top }) =>
    // top  margin
    top &&
    `padding-top: ${theme.dimensions[top]};
                  `};

  ${({ theme, bottom }) =>
    // bottom  margin
    bottom &&
    `padding-bottom: ${theme.dimensions[bottom]};
            `};
  ${({ theme, all }) =>
    // all  margins
    all &&
    `padding: ${theme.dimensions[all]};
    `};
`;

export default StyledPadding;
