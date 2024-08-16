import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StateContext from '../StateContext';
import { OrdersDrawerNav, AuthNavigator } from './OrdersNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
  const mainState = useContext(StateContext);
  const isAuth = !!mainState.user.token;
  const didTryAutoLogin = mainState.triedAutoLogin;
  // console.log(isAuth, didTryAutoLogin, mainState);
  return (
    <NavigationContainer>
      {isAuth && <OrdersDrawerNav />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
