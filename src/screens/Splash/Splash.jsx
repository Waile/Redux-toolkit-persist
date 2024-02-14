import {Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../utils/navigationStrings';
import {imagesPath} from '../../utils';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({index: 1, routes: [{name: navigationStrings.LOGIN}]});
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={imagesPath.splashBackground}
      style={styles.backgroundImage}>
      <Image source={imagesPath.splashLogo} style={styles.logo} />
      <Image source={imagesPath.subLogoSplash} style={styles.subLogo} />
    </ImageBackground>
  );
};

export default Splash;
