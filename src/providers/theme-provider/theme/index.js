import {
  responsive,
  mediaQueriesMaxWidth,
  mediaQueriesMinWidth,
} from '../../responsive-provider/utils'

const catchThatRabitTheme = () => {
  const colors = {
    abbey: 'rgb(70, 72, 76)',
    aluminium: 'rgb(162, 163, 165)',
    apple: 'rgb(70, 181, 73)',
    casal: 'rgb(49, 93, 101)',
    charade: 'rgb(39, 40, 51)',
    greenYellow: 'rgb(173, 255, 47)',
    gunPowder: 'rgb(66, 66, 89)',
    kimberly: 'rgb(113, 113, 152)',
    rollingStone: 'rgb(116, 118, 121)',
    santasGray: 'rgb(153, 158, 172)',
    shark: 'rgb(28, 29, 37)',
    spindle: 'rgb(188, 203, 240)',
    sushi: 'rgb(102, 179, 46)',
    white: 'rgb(255, 255, 255)',
    woodsmoke: 'rgb(24, 26, 31)',
    getRGBValue: (rgbColor) => rgbColor.match(/\d{1,3}, \d{1,3}, \d{1,3}/)[0],
  }

  const typography = {
    primary: 'good-times, sans-serif',
    secondary: 'Verdana, Geneva, Tahoma, sans-serif',
    defaultFont: {
      name: 'good-times',
      light: {
        10: `
        font-size: 10px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
       `,
        11: `
       font-size: 11px;
       font-weight: 300;
       font-stretch: normal;
       font-style: normal;
       line-height: 1.5;
      `,
        12: `
        font-size: 12px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
       `,
        14: `
       font-size: 14;
       font-weight: 300;
       font-stretch: normal;
       font-style: normal;
       line-height: 1.5;
      `,
      },
      regular: {
        16: `
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;       `,
        14: `
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;       `,
        13: `
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;  `,
        12: `
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;`,
        10: `
font-family: goodTimes;
font-size: 10px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
`,
      },
      normal: {
        24: `
        font-size: 24px;
        font-weight: 500;
       `,
        18: `
  font-size: 18px;
  font-weight: 500;
  `,
        16: `
  font-size: 16px;
  font-weight: 500;
  `,
        15: `
  font-size: 15px;
  font-weight: 500;
  `,
        14: `
  font-size: 14px;
  font-weight: 500;
  `,
        12: `
  font-size: 12px;
  font-weight: 500;
  `,
      },
      bold: {
        24: `
        font-size: 24px;
        font-weight: bold;
        line-height: 2;
       `,
        20: `
       font-size: 20px;
       font-weight: bold;
       line-height: 2;
      `,
        16: `
        font-size: 16px;
        font-weight: bold;
        line-height: 2;
       `,
        14: `
  font-size: 14px;
  font-weight: bold;
  line-height: 2;
  `,
      },
    },
  }

  return {
    colors,
    typography,
    mediaQueriesMaxWidth,
    mediaQueriesMinWidth,
    responsive,
  }
}

export default catchThatRabitTheme
