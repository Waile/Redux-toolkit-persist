import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {AppButton, AppScreen} from '../../components';
import styles from './styles';
import {colors, imagesPath} from '../../utils';
import AppTextInput from '../../components/AppTextInput';
import {constant} from '../../utils/constants';

const Login = () => {
  return (
    <AppScreen>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={imagesPath.splashBackground}
            style={styles.mainContainer}>
            <Image source={imagesPath.splashLogo} style={styles.logo} />
            <AppTextInput
              placeholder={constant.Username}
              leftImage={imagesPath.user}
              style={styles.textInput}
            />
            <AppTextInput
              placeholder={constant.Password}
              leftImage={imagesPath.lock}
              rightImage={imagesPath.eyeOn}
              style={styles.textInput}
            />
            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <View style={styles.loginContainer}>
              <AppButton
                title={constant.Login}
                buttonStyle={styles.loginButton}
              />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

export default Login;
