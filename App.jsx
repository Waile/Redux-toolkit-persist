import React, {useEffect} from 'react';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/redux/store.js';
import {Provider} from 'react-redux';
import Router from './src/routes/Router.js';
import SplashScreen from 'react-native-splash-screen';

let persistor = persistStore(store);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
