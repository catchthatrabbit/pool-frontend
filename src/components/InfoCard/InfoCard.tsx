import Text from 'atoms/Text/Text';
import { minWidth } from 'helpers/responsive';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { colorVariables } from 'styles/variables';

import type { InfoBoxItem } from 'helpers/text'

const WrapperStyled = styled.div`
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  width: 100%;
  ${minWidth(
    'laptop',
    css`
      width: 78%;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 48%;
    `,
  )}
`
const TitleStyled = styled.div`
  padding: 35px 35px 18px;
  ${minWidth(
    'tablet',
    css`
      padding: 43px 65px 18px;
    `,
  )}
`
const ContentTextStyled = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 18px 0 0;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  padding-bottom: 43px;
`
const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  :not(:nth-child(3)) {
    margin-right: 50px;
  }
  ${minWidth(
    'tablet',
    css`
      :not(:nth-child(3)) {
        margin-right: 126px;
      }
    `,
  )}
`

interface IProps {
  title: string
  data: InfoBoxItem[]
}
const InfoCard: FC<IProps> = ({ title, data }) => (
  <WrapperStyled>
    <TitleStyled>
      <Text size="very-large" fontWeight="bold">
        {title}
      </Text>
    </TitleStyled>
    <ContentTextStyled>
      {data.map(({ title, value }) => {
        return (
          <TextStyled>
            <Text size="very-large" fontWeight="bold">
              {`${value.prefix} ${value.text} ${value.suffix}`}
              {/* {type === 'hashSpeed' &&
                <Text size="small" fontWeight="bold">
                  /s
                </Text>
              } */}
            </Text>
            <Text size="small" fontWeight="light">
              {title}
            </Text>
          </TextStyled>
        )
      })}
    </ContentTextStyled>
  </WrapperStyled>
)

export default InfoCard
