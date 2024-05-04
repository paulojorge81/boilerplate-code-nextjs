import { getColors } from './colors'

export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      xsmall: '0.4rem',
      small: '0.8rem'
    }
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      small: '1.2rem',
      xsmall: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.2rem',
      xxxlarge: '2.4rem',
      huge: '4.8rem'
    }
  },
  colors: getColors(),
  spacings: {
    small: '0.4rem',
    xsmall: '0.8rem',
    xxsmall: '1.2rem',
    xxxsmall: '1.6rem',
    medium: '2rem',
    xmedium: '2.4rem',
    xxmedium: '2.8rem',
    xxxmedium: '3.2rem',
    large: '3.6rem',
    xlarge: '4.0rem',
    xxlarge: '4.4rem',
    xxxlarge: '4.8rem',
    huge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
