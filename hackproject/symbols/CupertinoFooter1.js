import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Button} from "react-native";

export default class CupertinoFooter1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.btnWrapper1}>
          <Button onPress = {()=>this.props.handler("day")} title={"DAY"} color="rgba(255,255,255,1)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper2}>
          <Button onPress = {()=>this.props.handler("week")} title="WEEKLY" color="rgba(255,255,255,1)" />
          <Text style={styles.spendingtext}>SPENDING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper4}>
          <Button onPress = {()=>this.props.handler("month")} title="MONTH" color="rgba(255,255,255,1)" />
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
  spendingtext: {
    fontSize: 19,
    fontFamily: "arial",
    justifyContent:"center",
    color: "rgba(255,255,255,1)"
  },
  btnWrapper1: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  btnWrapper2: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  btnWrapper4: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

});
