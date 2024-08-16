import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Platform, SafeAreaView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedOrdersScreen, { screenOptions as completedOrdersScreenOptions } from '../screens/orders/CompletedOrdersScreen';
import AssignedOrdersScreen, { screenOptions as assignedOrdersScreenOptions } from '../screens/orders/AssignedOrdersScreen';
import AuthScreen, { screenOptions as authScreenOptions } from '../screens/user/AuthScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const CompletedOrdersNav = createStackNavigator();

export const CompletedOrdersStack = () => {
  return (
    <CompletedOrdersNav.Navigator screenOptions={defaultNavOptions}>
      <CompletedOrdersNav.Screen name="CompletedOrders" component={CompletedOrdersScreen} options={completedOrdersScreenOptions} />
    </CompletedOrdersNav.Navigator>
  );
};

const AssignedOrdersNav = createStackNavigator();

export const AssignedOrdersStack = () => {
  return (
    <AssignedOrdersNav.Navigator screenOptions={defaultNavOptions}>
      <AssignedOrdersNav.Screen name="AssignedOrders" component={AssignedOrdersScreen} options={assignedOrdersScreenOptions} />
    </AssignedOrdersNav.Navigator>
  );
};

const OrdersTabNavigator = createBottomTabNavigator();

export const OrdersTabNav = () => {
  return (
    <OrdersTabNavigator.Navigator
      screenOptions={defaultNavOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <OrdersTabNavigator.Screen name="Assigned" component={AssignedOrdersStack} options={assignedOrdersScreenOptions} />
      <OrdersTabNavigator.Screen name="Completed" component={CompletedOrdersStack} options={completedOrdersScreenOptions} />
    </OrdersTabNavigator.Navigator>
  );
};

const OrdersDrawerNavigator = createDrawerNavigator();

export const OrdersDrawerNav = () => {
  return (
    <OrdersDrawerNavigator.Navigator
      drawerContent={props => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
              {/* <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  dispatch(authActions.logout());
                }}
              /> */}
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary
      }}
    >
      <OrdersDrawerNavigator.Screen
        name="Orders"
        component={OrdersTabNav}
        options={{
          drawerIcon: props => <Ionicons name={Platform.OS === 'android' ? 'md-bicycle' : 'ios-bicycle'} size={23} color={props.color} />
        }}
      />
    </OrdersDrawerNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="Auth" component={AuthScreen} options={authScreenOptions} />
    </AuthStackNavigator.Navigator>
  );
};
