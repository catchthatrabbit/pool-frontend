import {
  mediaQueriesMaxWidth,
  mediaQueriesMinWidth,
} from '../../responsive-provider/utils';

const catchTheRabit = () => {
  const colors = {
    selectiveYellow: '#ffbc00',
    pumpkin: '#ff7315',
    mirage: '#1b262c',
    picatonBlue: '#42a5f5',
    mountainMeadow: '#21bf73',
    pomegranate: '#e84118',
    alabaster: '#f7f7f7',
    white: 'white',
    lightGray: 'rgba(27, 38, 44, 0.2)',
    transparent: 'transparent',
    gray: '#ededed',
  };

  const defaultColors = {
    white: colors.white,
    primary: colors.pumpkin,
    secondary: colors.selectiveYellow,
    black: colors.mirage,
    information: colors.picatonBlue,
    success: colors.mountainMeadow,
    error: colors.pomegranate,
    danger: colors.pomegranate,
    neutral: colors.alabaster,
    gray: colors.gray,
  };
  const dimensions = {
    5: '5px',
    10: '10px',
    15: '15px',
    20: '20px',
    25: '25px',
    30: '30px',
    35: '35px',
    40: '40px',
    45: '45px',
    50: '50px',
    55: '55px',
    60: '60px',
    65: '65px',
    full: '100%',
    fullViewPortWidth: '100vw',
    fullViewPortHeight: '100vh',
  };

  const defaults = {
    shadow: '0 0 15px 0 rgba(0, 0, 0, 0.25);',
  };

  const typography = {
    defaultFont: {
      name: 'IRANYekan',
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
font-family: IRANYekan;
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
  };

  const direction = {
    rtl: 'rtl',
    ltr: 'ltr',
  };

  return {
    colors,
    dimensions,
    typography,
    defaultColors,
    direction,
    mediaQueriesMaxWidth,
    mediaQueriesMinWidth,
    defaults,
  };
};

export default catchTheRabit;
