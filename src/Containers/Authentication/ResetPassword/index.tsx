import React from 'react';
import {View, Text} from 'react-native';
import AFSafeAreView from '../../../Components/AFSafeAreaView';
import AFAuthBackView from '../../../Components/AFAuthBackView';
import AFBottomSafeAreView from '../../../Components/AFBottomSafeAreaView';
import AFAuthScreenTitle from '../../../Components/AFAuthScreenTitle';
import STRINGS from '../../../Utils/Constants/String';
import AFTextInput from '../../../Components/AFTextInput';
import {getHeightBasedDimension} from '../../../Utils/Responsive/Responsive';
import AFHaveAccBottomView from '../../../Components/AFHaveAccBottomView';
import {LOGIN_SIGHUP, VERIFICATION} from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

const ResetPasswordScreen = ({navigation}: any) => {
  const _backPress = () => {
    navigation.goBack();
  };

  const _resetPassNextPress = () => {
    navigation.navigate(LOGIN_SIGHUP);
  };

  return (
    <View style={{flex: 1}}>
      <AFSafeAreView />
      <AFAuthBackView
        onPress={_backPress}
        childrenComponent={
          <>
            <AFAuthScreenTitle title={STRINGS.resetPassword.title} />
            <View style={{height: getHeightBasedDimension() / 18}}></View>
            <AFTextInput
              title={STRINGS.common.password}
              value
              secureTextEntry={true}
            />
            <View style={{height: getHeightBasedDimension() / 58}}></View>
            <AFTextInput
              title={STRINGS.common.comPass}
              value
              secureTextEntry={true}
            />
            <View style={{height: getHeightBasedDimension() / 10}}></View>
          </>
        }
      />
      <AFHaveAccBottomView onPress={_resetPassNextPress} />

      <AFBottomSafeAreView />
    </View>
  );
};

export default ResetPasswordScreen;
