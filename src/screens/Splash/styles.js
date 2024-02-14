import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
  subLogo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
  },
});
export default styles;
