import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class CupertinoFooter1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.btnWrapper1}>
          <Text
            style={[
              styles.btn1Caption,
              {
                color: this.props.active ? "#007AFF" : "rgba(255,255,255,1)"
              }
            ]}
          >
            DAY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper2}>
          <Text style={styles.btn2Caption}>WEEKLY SPENDING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper4}>
          <Text style={styles.btn4Caption}>MONTH</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: "rgba(184,233,134,1)",
    flexDirection: "row"
  },
  btnWrapper1: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  btn1Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 16,
    fontFamily: "arial"
  },
  btnWrapper2: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  btn2Caption: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    paddingTop: 4,
    fontSize: 22,
    fontFamily: "arial",
    textAlign: "center"
  },
  btnWrapper4: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  btn4Caption: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    paddingTop: 4,
    fontSize: 16,
    fontFamily: "arial"
  }
});
