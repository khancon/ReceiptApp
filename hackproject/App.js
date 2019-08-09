import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomePage from './screens/Home.js';
import PurchasesPage from './screens/Purchases.js'

class HomeScreen extends React.Component {
  render() {
    return (
      <HomePage />
    );
  }
}

class PurchasesScreen extends React.Component {
  render() {
    return (
      <PurchasesPage />
    );
  }
}

class AnalyticsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Analytics!</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Purchases: { screen: PurchasesScreen },
  Analytics: {screen: AnalyticsScreen },
  Profile: {screen: ProfileScreen }
});

export default createAppContainer(TabNavigator);