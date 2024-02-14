import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, colors} from '../utils';

const {width} = Dimensions.get('window');
const Slides = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    width,
  },
  image: {
    height: '75%',
    resizeMode: 'contain',
  },
  title: {
    color: colors.black,
    fontSize: 29.27,
    textAlign: 'center',
    lineHeight: 39.72,
    fontFamily: FONTS.POPPINS,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
    maxWidth: '70%',
    lineHeight: 25.09,
    fontFamily: FONTS.POPPINS,
    fontWeight: '400',
  },
});
