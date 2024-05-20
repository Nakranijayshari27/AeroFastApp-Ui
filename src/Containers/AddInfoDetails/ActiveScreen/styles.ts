import {StyleSheet} from 'react-native';
import {theme} from '../../../Theme/Theme';
import {getHeightBasedDimension} from '../../../Utils/Responsive/Responsive';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
    zIndex: 9,
  },
  buttonView: {
    alignSelf: 'center',
  },
  svgView: {
    // backgroundColor: 'red',
  },
  imageContainer: {
    // backgroundColor: 'red',
  },
});
