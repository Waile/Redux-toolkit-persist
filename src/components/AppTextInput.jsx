import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {FONTS, colors} from '../utils';

const AppTextInput = ({
  leftImage,
  rightImage,
  placeholder,
  text,
  style,
  textStyle,
  textInputStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]}>
      {leftImage && <Image source={leftImage} style={styles.icon} />}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.grey1}
        {...otherProps}
      />
      {rightImage && <Image source={rightImage} style={styles.icon} />}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    columnGap: 5,
    backgroundColor: colors.grey2,
    marginHorizontal: 30,
    borderRadius: 18,
  },
  textInput: {
    flex: 1,
    fontFamily: FONTS.POPPINS,
    fontWeight: '500',
    fontSize: 20,
    color: colors.black,
  },
  icon: {
    height: 25,
    width: 25,
    bottom: 5,
  },
});
