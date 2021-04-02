import styled, { css } from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import { colorVariables } from 'styles/variables'

interface IProps {
  title: string
  subtitle: string
  value: string
  suffix: string
  size?: 'small' | 'large'
}

const WrapperStyled = styled.div<IProps>`
  width: ${(props: IProps) =>
    (props.size === 'small' && '500px') || (props.size === 'large' && '812px')};
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  padding: ${(props: IProps) =>
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
`
const TitleContainerStyled = styled.div<IProps>`
  margin-bottom: ${(props: IProps) =>
    (props.size === 'small' && '15px') || (props.size === 'large' && '18px')};
`
const SubtitleStyled = styled.div`
  line-height: 12px;
  margin-top: 10px;
  height: 14px;
`
const TextContainerStyled = styled.div<IProps>`
  ${(props) =>
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
