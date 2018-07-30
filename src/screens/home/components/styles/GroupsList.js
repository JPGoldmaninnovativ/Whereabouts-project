import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat',
  },
  contentContainer: {
    flex: 1,
  },
  groupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '$redColor',
  },
  groupCardTopContainer: {
    flex: 0.4,
    position: 'relative',
  },
  groupCardTitle: {
    fontFamily: 'montserratBold',
    color: '$whiteColor',
    top: '1%',
    left: '2.5%',
  },
  groupCardBottomContainer: {
    flex: 1,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  groupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat',
  },
  groupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight',
    top: '1.5%',
    left: '2.5%',
  },
});

export default styles;
