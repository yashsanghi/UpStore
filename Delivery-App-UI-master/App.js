import React, { useState } from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './navigation/AppNavigator';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import { useImmerReducer } from 'use-immer';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const initialState = {
    triedAutoLogin: false,
    loggedIn: false,
    user: {
      token: '',
      _id: '',
      name: '',
      phoneNumber: '',
      pushToken: ''
    }
  };

  function mainReducer(draft, action) {
    switch (action.type) {
      case 'triedAutoLogin':
        draft.triedAutoLogin = true;

      case 'login':
        draft.loggedIn = true;

        draft.user = { ...action.value.user, token: action.value.token };

        return;
      case 'logout':
        draft.loggedIn = false;
        return;

      case 'pushToken':
        draft.user = { ...draft.user, pushToken: action.value };
    }
  }

  const [state, dispatch] = useImmerReducer(mainReducer, initialState);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <AppNavigator />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
