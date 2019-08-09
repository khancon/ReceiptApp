import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialIconButtonsFooter extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.buttonWrapper1}>
          <Icon
            name={"home"}
            type={"MaterialCommunityIcons"}
            style={styles.icon1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <Icon
            name={"format-list-checkbox"}
            type={"MaterialCommunityIcons"}
            style={styles.activeIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper3}>
          <Icon
            name={"chart-bar-stacked"}
            type={"MaterialCommunityIcons"}
            style={styles.icon3}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper4}>
          <Icon
            name={"account-settings"}
            type={"MaterialCommunityIcons"}
            style={styles.icon4}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  buttonWrapper1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: 80,
    maxWidth: 168
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: 80,
    maxWidth: 168
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 1
  },
  buttonWrapper3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: 80,
    maxWidth: 168
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: 80,
    maxWidth: 168
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  }
});
