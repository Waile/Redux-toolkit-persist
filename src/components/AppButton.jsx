import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, colors} from '../utils';

const AppButton = ({
  title,
  onPress,
  color = colors.green,
  titleColor = colors.white,
  buttonStyle,
  buttonTextStyle,
}) => {
  return (
    <Pressable
      style={[styles.button, {backgroundColor: color}, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.text, {color: titleColor}, buttonTextStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10.45,
    paddingVertical: 15,
  },
  text: {
    color: colors.white,
    fontFamily: FONTS.POPPINS,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16.7,
  },
});
