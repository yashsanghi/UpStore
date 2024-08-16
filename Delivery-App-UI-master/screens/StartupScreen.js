import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';

const StartupScreen = props => {
  const mainDispatch = useContext(DispatchContext);
  const mainState = useContext(StateContext);

  useEffect(() => {
    const getUserData = async () => {
      try {
        return JSON.parse(await AsyncStorage.getItem('userData'));
      } catch (err) {
        console.log(err);
      }
    };

    const AutoLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');

      const { _id, name, phoneNumber, token, pushToken } = JSON.parse(userData);

      mainDispatch({ type: 'triedAutoLogin', value: true });

      mainDispatch({ type: 'login', value: { token, user: { _id, name, phoneNumber, pushToken } } });
    };

    getUserData().then(userData => {
      if (!!userData) {
        AutoLogin();
      } else {
        mainDispatch({ type: 'triedAutoLogin', value: true });
      }
    });
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
