import React from 'react';
import {View, StyleSheet , TouchableOpacity} from 'react-native';
import AFArrowButton from '../AFArrowButton';
import { theme , Text } from '../../Theme/Theme';

interface AFHaveAccBottomViewProps {
  titleOne: string;
  titleTwo: string;
  onPress: () => void;
  titleOnPress: () => void;
}

const AFHaveAccBottomView: React.FC<AFHaveAccBottomViewProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.flexText}>
        <Text variant="inter_Medium_12" color="white" style={styles.textOne}>{props.titleOne}{' '}</Text>
        <TouchableOpacity onPress={props.titleOnPress}>
        <Text variant="Inter_SemiBold_12" color="white" style={styles.textTwo} >{props.titleTwo}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <AFArrowButton onPress={props.onPress}/>
      </View>
    </View>
  );
};

export default AFHaveAccBottomView;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 35,
    flexDirection: 'row',
  },
  flexText: {
    flexDirection: 'row',
    flex : 1,
    alignSelf: 'center',
  },
  textTwo: {
    color: theme.colors.lime_green,
    textDecorationLine: 'underline',
  },
  textOne: {
    color: theme.colors.Rich_Black,
  }
});
