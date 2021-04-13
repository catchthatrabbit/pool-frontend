import styled from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import { colorVariables } from 'styles/variables'
import { minWidth } from 'helpers/responsive'

interface IProps {
  title: string
  subtitle: string
  value: string
  suffix: string
  size?: 'small' | 'large'
}

const WrapperStyled = styled.div`
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  padding: ${(props: { size: string }) =>
    (props.size === 'small' && '50px 55px 38px') ||
    (props.size === 'large' && '43px 65px')};
  ${(props) =>
    props.size === 'small' &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `};
  ${(props: { size: string }) =>
    minWidth(
      'tablet',
      `
        width: ${
          (props.size === 'small' && '50%') || (props.size === 'large' && '50%')
        };
      `,
    )};
  ${(props: { size: string }) =>
    minWidth(
      'laptop',
      `
        width: ${
          (props.size === 'small' && '45%') || (props.size === 'large' && '50%')
        };
      `,
    )};
  ${(props: { size: string }) =>
    minWidth(
      'laptopL',
      `
        width: ${
          (props.size === 'small' && '40%') || (props.size === 'large' && '35%')
        };
      `,
    )};
  ${(props: { size: string }) =>
    minWidth(
      'desktop',
      `
        width: ${
          (props.size === 'small' && '25%') || (props.size === 'large' && '40%')
        };
      `,
    )};
`
const TitleContainerStyled = styled.div`
  margin-bottom: ${(props: { size: string }) =>
    (props.size === 'small' && '15px') || (props.size === 'large' && '18px')};
`
const SubtitleStyled = styled.div`
  line-height: 12px;
  margin-top: 10px;
  height: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const TextContainerStyled = styled.div`
  ${(props: { size: string }) =>
    props.size === 'large' &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `};
`

const InfoStatsBox: FC<IProps> = ({
  title,
  subtitle,
  value,
  suffix,
  size = 'small',
}) => {
  return (
    <WrapperStyled size={size}>
      <TitleContainerStyled size={size}>
        <Text size="very-large" fontWeight="bold" italic>
          {title}
        </Text>
      </TitleContainerStyled>
      <TextContainerStyled size={size}>
        <Text size="very-large" fontWeight="bold" italic>
          {`${value} ${suffix}`}
        </Text>
        <SubtitleStyled>
          <Text size="small" italic>
            {subtitle}
          </Text>
        </SubtitleStyled>
      </TextContainerStyled>
    </WrapperStyled>
  )
}

export default InfoStatsBox
