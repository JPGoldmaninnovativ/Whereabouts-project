import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const colors = {
  primary: '#FF1493',
  secondary: '#FFFFFF'
}
const fonts = {
  hairline: 'Lato-Hairline',
  light: 'Lato-Light',
  base: 'Lato-Regular',
  bold: 'Lato-Bold'
}
const Styles = {
    wrapper: {
        flex: 1
    },
    app: {
        flex: 1,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
    },
    container: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%'
    },
    section: {
        flex: 2,
        paddingTop: DEVICE_HEIGHT*2/5,
        width: '100%'
    },
    sectionHeader: {
    },
    sectionHeaderText: {
        width: '100%',
        padding: 40,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '500'
    },
    sectionFooter: {
        width: '100%',
        marginTop: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        paddingTop: DEVICE_HEIGHT*4/5,
        width: DEVICE_WIDTH,
    },
    sectionFooterLink: {
        fontSize: 14,
        color: colors.primary,
        alignItems: 'baseline',
        textAlign: 'center'
    },
    sectionBody: {
    },
    cell: {
        width: '50%'
    },
    errorRow: {
    },

    photo: {
        width: '100%'
    },
    album: {
        width: '100%'
    },

    a: {
    },
    button: {
        backgroundColor: colors.secondary,
    },

    input: {
        margin: 6
    },

    logo: {
      position: 'absolute',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      top: DEVICE_HEIGHT*1/4,
    },
}
export {
  colors,
  fonts,
  Styles,
}
