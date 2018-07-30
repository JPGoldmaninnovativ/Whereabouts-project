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
  activityCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '$redColor',
  },
  activityCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  activityCardTitle: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
  },
  activityCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  activityCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat',
  },
  activityCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight',
  },
});

export default styles;
