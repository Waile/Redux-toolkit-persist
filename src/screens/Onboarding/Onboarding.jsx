import {ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppScreen, OnboardingSlider} from '../../components';
import {imagesPath} from '../../utils';

const Onboarding = () => {
  return (
    <AppScreen>
      <ImageBackground
        source={imagesPath.onBoardingBackground}
        style={styles.onboardingContainer}>
        <OnboardingSlider />
      </ImageBackground>
    </AppScreen>
  );
};

export default Onboarding;
