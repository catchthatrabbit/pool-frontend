import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import numberToString from 'helpers/number'

type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro'

export type InfoBoxItem = {
  title: string
  value: number
  type: TypeNumber
}
const InfoText: FC<InfoBoxItem> = ({ title, value, type }) => {
  function renderValue() {
    switch (type) {
      case 'hashSpeed':
      case 'hash':
        let metric = 'GH'
        let unit = 1000

        if (value / unit >= 1000) {
          metric = 'TH'
          unit = 1000000
        }
        return (
          <>
            {value / unit}
            <Text size="large" fontWeight="bold" italic>
              {' '}
              {metric}
              {type === 'hashSpeed' && '/'}
            </Text>
            {type === 'hashSpeed' && (
              <Text size="small" fontWeight="bold" italic>
                s
              </Text>
            )}
          </>
        )
      case 'percent':
        return `${value}%`
      case 'euro':
        return `€ ${numberToString(value)}`
      default:
        return numberToString(value)
    }
  }
  return (
    <>
      <Text size="very-large" fontWeight="bold" italic>
        {renderValue()}
      </Text>
      <Text size="small" fontWeight="light">
        {title}
      </Text>
    </>
  )
}

export default InfoText
