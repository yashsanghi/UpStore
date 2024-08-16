import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Card from '../../components/UI/Card';
import Axios from 'axios';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import Colors from '../../constants/Colors';~
import Ionicons from 'react-native-vector-icons/Ionicons';

const CompletedOrdersScreen = props => {
  const [orders, setOrders] = useState('');
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    const loadAsync = async () => {
      try {
        const response = await Axios.get(`https://upstore.in/api/orders/all`);

        setOrders(response.data);
        setRefreshing(false);
      } catch (err) {
        return console.log(err);
      }
    };

    loadAsync();
  }, [refreshing]);

  const renderProducts = ({ item }) => {
    return (
      <View style={{ marginTop: '4%' }}>
        <Text>Shop: {item.product.shopName}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Qty: {item.quantity}</Text>
      </View>
    );
  };

  const renderOrders = ({ item }) => {
    return (
      <Card style={styles.listItem}>
        <Text>Name: {item.address.contactName}</Text>
        <Text>Mobile: {item.address.contactNumber}</Text>
        <Text>Deliver To: {item.address.address}</Text>

        <View style={styles.margin}>
          <Text>Order Details:</Text>
          <Text>Transaction ID: {item.transaction_id}</Text>
          <Text>Total: Rs.{item.amount}</Text>
        </View>

        <View style={styles.margin}>
          <Text>Products:</Text>
        </View>

        {refreshing ? <ActivityIndicator /> : <FlatList onRefresh={() => setRefreshing(true)} data={item.products} renderItem={renderProducts} keyExtractor={item => item._id} />}
      </Card>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <FlatList style={styles.list} data={orders} renderItem={renderOrders} keyExtractor={item => item._id} />
      </View>
    </SafeAreaView>
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
  wrapper: {
    marginVertical: 10,
    alignItems: 'center'
  },
  list: {
    marginTop: '2%',
    width: '100%',
    height: '100%',
    padding: '1%'
  },
  listItem: {
    padding: '5%',
    margin: '3 %'
  },
  margin: {
    marginTop: '5%'
  }
});

export default CompletedOrdersScreen;
