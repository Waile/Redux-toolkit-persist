import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import AppButton from './AppButton';
import {constant, slides} from '../utils/constants';
import {colors, navigationStrings} from '../utils';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');
const Footer = ({handleSlide, currentSlideIndex}) => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.replace(navigationStrings.LOGIN);
  };
  return (
    <View style={styles.mainContainer}>
      {currentSlideIndex == slides.length - 1 ? (
        <AppButton
          title={constant.Get_Started}
          buttonStyle={styles.getStartedButton}
          onPress={handleGetStarted}
        />
      ) : (
        <AppButton
          title={constant.Next}
          onPress={handleSlide}
          buttonStyle={styles.button}
        />
      )}

      <View style={styles.indicatorsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {width: 30},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  mainContainer: {
    height: height * 0.17,
  },
  button: {
    marginBottom: 30,
    marginHorizontal: 130,
  },
  getStartedButton: {
    marginBottom: 30,
    marginHorizontal: 120,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 7,
    width: 7,
    backgroundColor: colors.green,
    marginHorizontal: 3,
    borderRadius: 50,
  },
});
