import React, { useContext, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StateContext from '../../StateContext';
import DispatchContext from '../../DispatchContext';
// import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AssignedOrdersScreen = props => {
  const mainState = useContext(StateContext);
  const mainDispatch = useContext(DispatchContext);

  const { user } = mainState;
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    const getPermissions = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));

      let pushToken;
      let statusObj = await Permissions.getAsync(Permissions.NOTIFICATIONS);

      if (statusObj.status !== 'granted') {
        statusObj = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      }
      if (statusObj.status !== 'granted') {
        pushToken = null;
      }

      if (statusObj.status === 'granted' && !mainState.user.pushToken) {
        pushToken = (await Notifications.getExpoPushTokenAsync()).data;

        try {
          const response = await Axios.put(`http://65.0.144.68/api/user/${userData._id}`, { pushToken }, config);
        } catch (err) {
          return console.log(err);
        }

        mainDispatch({ type: 'pushToken', value: pushToken });
      }
    };
    getPermissions();

    return () => {};
  }, []);

  return (
    <ScrollView>
      <View style={styles.actions}>
        <Text>Assigned Orders Screen</Text>
      </View>
    </ScrollView>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Orders',
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      iconName = focused ? 'ios-list-box' : 'ios-list';

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  }
});

export default AssignedOrdersScreen;
