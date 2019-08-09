import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomePage from './screens/Home.js';
import PurchasesPage from './screens/Purchases.js'
import DashboardPage from './screens/Dashboard.js'
import ProfilePage from './screens/Profile.js'
var data = require('./csvjson.json'); // forward slashes will depend on the file location

class HomeScreen extends React.Component {
  
  render() {
    /*
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        console.log("Name: " + obj.Title + ", " + obj.Item_Total);
    }
    */
    var arrTitle = [];
    var arrItem_Total = [];

    for (var x = 0; x < data.length; x++) {
      var obj = data[x];
      arrTitle[x] = obj.Title;
      arrItem_Total[x] = obj.Item_Total;
    }

    for (var g = 0; g < arrTitle.length; g++) {
      console.log("data_entry");
      console.log(arrTitle[g]);
      console.log(arrItem_Total[g]);
    }

    var day = "145"
    var week = "200"
    var month = "300"
    return (
      <HomePage dayD={day} weekD={week} monthD={month}  />
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