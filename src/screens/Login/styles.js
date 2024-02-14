import {StyleSheet} from 'react-native';
import {colors} from '../../utils';
const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  textInput: {
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 10,
    color: colors.black,
  },
  loginButton: {},
  loginContainer: {
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
export default styles;
