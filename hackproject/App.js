import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomePage from './screens/Home.js';
import PurchasesPage from './screens/Purchases.js'
import DashboardPage from './screens/Dashboard.js'
import ProfilePage from './screens/Profile.js'

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
      <DashboardPage />
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <ProfilePage />
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