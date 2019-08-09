import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ReactDOM from 'react-dom';
import * as V from 'victory';

export default class ProfilePage extends Component {
  render() {
    const data = [
      {day: 1, spent: 13000},
      {day: 2, spent: 16500},
      {day: 3, spent: 14250},
      {day: 4, spent: 19000}
    ];
    return (
      <View style={styles.root}>
        <View style={styles.topNav}>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.name}>
          <Text style={styles.justinRhodes}>Justin Rhodes</Text>
          <Text style={styles.rhodesju21GmailCom}>rhodesju21@gmail.com</Text>
        </View>
        <View style={styles.profile}>
          <Image
            source={require("../assets/images/ae13e3f5c1f1d86bcb6c547b44d3c2e66af6962a.png")}
            style={styles.profile1}
          />
          <Text style={styles.profile2}>PROFILE</Text>
        </View>
        <View style={styles.help}>
          <Text style={styles.help1}>HELP</Text>
          <Image
            source={require("../assets/images/e61db066b947b00e696d5c16f89b3cbc5a17b8d7.png")}
            style={styles.help2}
          />
        </View>
        <View style={styles.settings}>
          <Text style={styles.settings1}>SETTINGS</Text>
          <Image
            source={require("../assets/images/cff457f74d5352af9593e7e58437dac690fa3e85.png")}
            style={styles.settings2}
          />
        </View>
        <Text style={styles.description}>
          Cudos is a personal spending app that tracks all your online purchases
          and breaks them down by item, category, and brand. Our goal is to help
          you be more aware of your spending one cudo at a time.
        </Text>
        <Image
          source={require("../assets/images/6b84d270174f41a638b808f7b025260cf260ae6e.png")}
          style={styles.piggyBankCopy}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  topNav: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "21.88%",
    position: "absolute"
  },
  rectangle: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(188,231,132,1)",
    position: "absolute",
    overflow: "hidden"
  },
  name: {
    top: "9.71%",
    left: "11.84%",
    width: "60.63%",
    height: "8.15%",
    position: "absolute"
  },
  justinRhodes: {
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 35,
    fontFamily: "avenir-medium",
    letterSpacing: 2.33
  },
  rhodesju21GmailCom: {
    top: "63.01%",
    left: "0.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "avenir-light"
  },
  profile: {
    top: "41.74%",
    left: "11.84%",
    width: "26.33%",
    height: "3.13%",
    position: "absolute"
  },
  profile1: {
    top: "3.57%",
    left: "0.00%",
    width: "24.77%",
    height: "96.43%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  profile2: {
    top: "0.00%",
    left: "41.28%",
    width: "58.72%",
    height: 20,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  help: {
    top: "61.05%",
    left: "11.84%",
    width: "28.26%",
    height: "3.01%",
    position: "absolute"
  },
  help1: {
    top: "0.00%",
    left: "38.46%",
    width: "61.54%",
    height: 20,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  help2: {
    top: "0.00%",
    left: "0.00%",
    width: "23.08%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  settings: {
    top: "51.34%",
    left: "11.84%",
    width: "28.26%",
    height: "3.13%",
    position: "absolute"
  },
  settings1: {
    top: "0.00%",
    left: "38.46%",
    width: "61.54%",
    height: 20,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  settings2: {
    top: "3.57%",
    left: "0.00%",
    width: "23.08%",
    height: "96.43%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  description: {
    top: "25.67%",
    left: "11.84%",
    width: "75.60%",
    height: 100,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  piggyBankCopy: {
    top: "72.32%",
    left: "34.54%",
    width: "30.43%",
    height: "14.06%",
    backgroundColor: "transparent",
    position: "absolute"
  }
});
