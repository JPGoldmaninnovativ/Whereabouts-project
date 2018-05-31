import { Font } from 'expo';

const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font));


export const fontAssets = cachedFonts([
  {
    montserrat: require('../src/fonts/Montserrat-Regular.ttf')
  },
  {
    montserratBold: require('../src/fonts/Montserrat-Bold.ttf')
  },
  {
    montserratLight: require('../src/fonts/Montserrat-Light.ttf')
  },
  {
    montserratMed: require('../src/fonts/Montserrat-Medium.ttf')
  },
  {
    latoRegular: require('../src/fonts/Lato-Regular.ttf')
  },
  {
    latoLight: require('../src/fonts/Lato-Light.ttf')
  },
  {
    latoHairline: require('../src/fonts/Lato-Hairline.ttf')
  },
  {
    latoBold: require('../src/fonts/Lato-Bold.ttf')
  }
]);
