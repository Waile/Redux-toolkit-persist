import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../utils/navigationStrings';
import {Forget, Login, Onboarding, Splash} from '../screens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.SPLASH} component={Splash} />
      <Stack.Screen
        name={navigationStrings.ONBOARDING}
        component={Onboarding}
      />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.FORGET} component={Forget} />
    </Stack.Navigator>
  );
};

export default AuthStack;
