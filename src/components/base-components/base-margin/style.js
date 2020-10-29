import styled from 'styled-components';

const StyledMargin = styled.div`
  ${({ x }) =>
    //   x axis margin (right and left)
    x
    && `margin-right: ${x};
                        margin-left: ${x}`};

  ${({ y }) =>
    // y axis margin (bottom and top)
    y
    && `margin-top: ${y};
                        margin-bottom: ${y}`};

  ${({ right }) =>
  // right  margin

    right
    && `margin-right: ${right};
                        `};

  ${({ left }) =>
    // left  margin
    left
    && `margin-left: ${left};
                      `};

  ${({ top }) =>
    // top  margin
    top
    && `margin-top: ${top};
                  `};

  ${({ bottom }) =>
    // bottom  margin
    bottom
    && `margin-bottom: ${bottom};
            `};
  ${({ all }) =>
    // all  margins
    all
    && `margin: ${all};
    `};
  ${({ inline }) =>
    // all  margins
    inline
    && `display: inline-block;
    `};
  ${({ flex }) =>
    // all  margins
    flex
    && `display: flex;
    `};
`;

export default StyledMargin;
