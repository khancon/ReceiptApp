import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CudosDashboard from './screens/CudosDashboard';

class HomeScreen extends React.Component {
  render() {
    return (
      <CudosDashboard />
    );
  }
}

class PurchasesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Purchases!</Text>
      </View>
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