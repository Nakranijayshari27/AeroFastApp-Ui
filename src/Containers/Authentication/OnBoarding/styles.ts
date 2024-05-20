import {StyleSheet, Dimensions} from 'react-native';
import {
  Inter_Medium,
  Inter_Regular,
  Inter_SemiBold,
  theme,
} from '../../../Theme/Theme';
import {
  fontPixel,
  getHeightBasedDimension,
  getWidthBasedDimension,
} from '../../../Utils/Responsive/Responsive';
import {color} from '@shopify/restyle';

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  renderItemContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: theme.colors.white,
  },
  image: {},
  img: {
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    marginTop: -10.9,
  },
  textContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    marginTop: getHeightBasedDimension() / 50,
  },
  titleView: {
    height: getHeightBasedDimension() / 10,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: theme.colors.Rich_Black,
    fontSize: fontPixel(17),
    paddingHorizontal: getWidthBasedDimension() / 30,
    textAlign: 'center',
    fontFamily: Inter_SemiBold,
    lineHeight: theme.spacing.l,
  },
  descriptionView: {},
  description: {
    color: theme.colors.Cool_Gray,
    fontSize: fontPixel(12),
    textAlign: 'center',
    fontFamily: Inter_Regular,
    lineHeight: theme.spacing.m,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    // backgroundColor: 'yellow',
    marginBottom: 30,
  },
  dotContainer: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
    marginTop: 5,
  },
  dot: {
    borderRadius: 15,
    height: 10,
    marginRight: 5,
    width: 10,
  },
  backButtonView: {
    position: 'absolute',
    top: 13,
    left: 13,
  }
});
