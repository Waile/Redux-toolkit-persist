import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {slides} from '../utils/constants';
import {Slides, Footer} from '.';

const {width} = Dimensions.get('window');
const OnboardingSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides?.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  return (
    <>
      <FlatList
        ref={ref}
        data={slides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        style={styles.mainContainer}
        renderItem={({item}) => <Slides item={item} />}
      />
      <Footer
        handleSlide={goToNextSlide}
        currentSlideIndex={currentSlideIndex}
      />
    </>
  );
};

export default OnboardingSlider;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '30%',
  },
});
