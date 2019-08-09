import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Svg, { Path } from "react-native-svg";
import MaterialIconButtonsFooter from "../symbols/MaterialIconButtonsFooter";
import CupertinoFooter1 from "../symbols/CupertinoFooter1";

export default class CudosDashboard extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.topNav}>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.spendingAmt}>
          <Svg viewBox={"-2 -2 253 253"} style={styles.oval}>
            <Path
              strokeWidth={4}
              fill={"transparent"}
              stroke={"rgba(167,205,204,1)"}
              d={
                "M124.50 247.00 C192.15 247.00 247.00 192.15 247.00 124.50 C247.00 56.85 192.15 2.00 124.50 2.00 C56.85 2.00 2.00 56.85 2.00 124.50 C2.00 192.15 56.85 247.00 124.50 247.00 C192.15 247.00 124.50 247.00 124.50 247.00 Z"
              }
            />
          </Svg>
          <View style={styles.rect8} />
          <Image
            source={require("../assets/images/6b84d270174f41a638b808f7b025260cf260ae6e.png")}
            style={styles.piggyBankCopy}
          />
          <Text style={styles.style}>$</Text>
          <Text style={styles.style1}>81</Text>
          <Text style={styles.style2}>153</Text>
        </View>
        <View style={styles.barChart}>
          <Svg viewBox={"-2.5 -2.5 360 11"} style={styles.line}>
            <Path
              strokeWidth={5}
              fill={"rgba(247,227,234,1)"}
              stroke={"rgba(247,227,234,1)"}
              d={"M2.50 3.00 C352.50 3.00 352.50 3.00 352.50 3.00 L2.50 3.00 Z"}
            />
          </Svg>
          <View style={styles.rectangle1} />
          <View style={styles.rectangle2} />
          <View style={styles.rectangle3} />
          <View style={styles.rectangle4} />
          <View style={styles.rectangle5} />
          <View style={styles.rectangle6} />
          <View style={styles.rectangle7} />
          <Text style={styles.sat}>Sat</Text>
          <Text style={styles.sun}>Sun</Text>
          <Text style={styles.mon}>Mon</Text>
          <Text style={styles.tu}>Tu</Text>
          <Text style={styles.wed}>Wed</Text>
          <Text style={styles.th}>Th</Text>
          <Text style={styles.fri}>Fri</Text>
        </View>
        <View style={styles.groceries}>
          <Svg
            viewBox={"-1.75 -1.75 100.81443298969074 100.8144329896907"}
            style={styles.oval1}
          >
            <Path
              strokeWidth={3.5}
              fill={"transparent"}
              stroke={"rgba(204,151,142,0.5)"}
              d={
                "M48.66 95.56 C74.56 95.56 95.56 74.56 95.56 48.66 C95.56 22.75 74.56 1.75 48.66 1.75 C22.75 1.75 1.75 22.75 1.75 48.66 C1.75 74.56 22.75 95.56 48.66 95.56 C74.56 95.56 48.66 95.56 48.66 95.56 Z"
              }
            />
          </Svg>
          <View style={styles.rect11} />
          <Image
            source={require("../assets/images/f06e8fd18ffd07ce380fd129a77b79b5eb7f0bdc.png")}
            style={styles.groceries1}
          />
          <Text style={styles.style3}>34</Text>
          <Text style={styles.style4}>%</Text>
        </View>
        <View style={styles.coffee}>
          <Svg
            viewBox={"-1.25 -1.25 77.18391022133585 76.09040820779765"}
            style={styles.oval2}
          >
            <Path
              strokeWidth={2.5}
              fill={"transparent"}
              stroke={"rgba(75,55,19,1)"}
              fillOpacity={0.37}
              strokeOpacity={0.37}
              d={
                "M37.82 72.34 C57.75 72.60 73.69 56.90 73.43 37.27 C73.17 17.64 56.80 1.51 36.87 1.25 C16.94 0.99 0.99 16.69 1.25 36.32 C1.51 55.95 17.88 72.08 37.82 72.34 C57.75 72.60 37.82 72.34 37.82 72.34 Z"
              }
            />
          </Svg>
          <View style={styles.rect12} />
          <Image
            source={require("../assets/images/ff19e7490d6505c6aed46a719e839ce4f1ac2ad1.png")}
            style={styles.coffeeShop}
          />
          <Text style={styles.style5}>%</Text>
          <Text style={styles.style6}>21</Text>
        </View>
        <View style={styles.clothing}>
          <Svg viewBox={"-2.25 -2.25 149 149"} style={styles.oval3}>
            <Path
              strokeWidth={4.5}
              fill={"transparent"}
              stroke={"rgba(255,195,99,0.5)"}
              d={
                "M72.25 142.25 C110.91 142.25 142.25 110.91 142.25 72.25 C142.25 33.59 110.91 2.25 72.25 2.25 C33.59 2.25 2.25 33.59 2.25 72.25 C2.25 110.91 33.59 142.25 72.25 142.25 C110.91 142.25 72.25 142.25 72.25 142.25 Z"
              }
            />
          </Svg>
          <Text style={styles.style7}>45</Text>
          <Text style={styles.style8}>%</Text>
          <View style={styles.rect9} />
          <Image
            source={require("../assets/images/45289400d1f3f9c37997ba0048b163a238b47c34.png")}
            style={styles.tshirt}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <MaterialIconButtonsFooter style={styles.materialIconButtonsFooter} />
        </TouchableOpacity>
        <StatusBar hidden={true} style={styles.statusBar} />
        <CupertinoFooter1 style={styles.cupertinoFooter1} />
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
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "42.41%",
    position: "absolute"
  },
  rectangle: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(188,231,132,1)",
    position: "absolute",
    overflow: "hidden"
  },
  spendingAmt: {
    top: "7.14%",
    left: "11.84%",
    width: "76.57%",
    height: "35.38%",
    position: "absolute"
  },
  oval: {
    top: "0.78%",
    left: "10.26%",
    width: "79.81%",
    height: "79.81%",
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        rotate: "339.00deg"
      },
      {
        scaleY: -1
      }
    ],
    borderColor: "transparent"
  },
  rect8: {
    top: 203.19,
    left: 119.84,
    width: 76.31,
    height: 91.34,
    backgroundColor: "#bce784",
    position: "absolute"
  },
  piggyBankCopy: {
    top: "68.29%",
    left: "40.7%",
    width: "18.93%",
    height: "18.93%",
    position: "absolute",
    borderColor: "rgba(167,205,204,1)",
    borderWidth: 1
  },
  style: {
    top: "39.27%",
    left: "21.65%",
    width: "4.73%",
    height: 41,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 33,
    fontFamily: "avenir-light",
    lineHeight: 41
  },
  style1: {
    top: "37.55%",
    left: "65.95%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "avenir-roman",
    letterSpacing: 7
  },
  style2: {
    top: "35.01%",
    left: "26.38%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 68,
    fontFamily: "avenir-light",
    letterSpacing: 4
  },
  barChart: {
    top: "46.99%",
    left: "7.73%",
    width: "84.54%",
    height: "17.86%",
    position: "absolute"
  },
  line: {
    top: "79.38%",
    left: "-1.29%",
    width: "102.86%",
    height: "6.88%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle1: {
    top: "0.00%",
    left: "3.57%",
    width: "7.14%",
    height: "80.00%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  rectangle2: {
    top: "48.13%",
    left: "17.86%",
    width: "7.14%",
    height: "31.88%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  rectangle3: {
    top: "73.13%",
    left: "32.29%",
    width: "7.14%",
    height: "6.88%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  rectangle4: {
    top: "16.88%",
    left: "46.57%",
    width: "7.14%",
    height: "63.13%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  rectangle5: {
    top: "21.25%",
    left: "60.86%",
    width: "7.14%",
    height: "58.75%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  rectangle6: {
    top: "16.88%",
    left: "75.14%",
    width: "7.14%",
    height: "63.13%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  rectangle7: {
    top: "5.63%",
    left: "89.43%",
    width: "7.14%",
    height: "74.38%",
    backgroundColor: "rgba(61,85,104,1)",
    position: "absolute"
  },
  sat: {
    top: "84.38%",
    left: "3.43%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  sun: {
    top: "84.38%",
    left: "16.86%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  mon: {
    top: "84.38%",
    left: "31.14%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  tu: {
    top: "84.38%",
    left: "47.43%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  wed: {
    top: "84.38%",
    left: "59.43%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  th: {
    top: "84.38%",
    left: "76.00%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  fri: {
    top: "84.38%",
    left: "89.43%",
    color: "rgba(167,205,204,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  groceries: {
    top: "65.4%",
    left: "18.6%",
    width: "30.68%",
    height: "14.4%",
    position: "absolute"
  },
  oval1: {
    top: "13.19%",
    left: "11.55%",
    width: "79.38%",
    height: "78.15%",
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        rotate: "153deg"
      }
    ],
    borderColor: "transparent"
  },
  rect11: {
    top: -0.2,
    left: 42.88,
    width: 42.74,
    height: 43.28,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  groceries1: {
    top: "0.00%",
    left: "35.09%",
    width: "30.08%",
    height: "29.61%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  style3: {
    top: "42.96%",
    left: "39.49%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "avenir-roman"
  },
  style4: {
    top: "44.57%",
    left: "60.51%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "avenir-roman"
  },
  coffee: {
    top: "79.25%",
    left: "25.6%",
    width: "24.4%",
    height: "11.38%",
    position: "absolute"
  },
  oval2: {
    top: "14.55%",
    left: "13.39%",
    width: "76.42%",
    height: "74.60%",
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        rotate: "145deg"
      }
    ],
    borderColor: "transparent"
  },
  rect12: {
    top: 0,
    left: 30.07,
    width: 40.89,
    height: 31.38,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(255,255,255,1)",
    shadowOpacity: 0.01
  },
  coffeeShop: {
    top: "0.00%",
    left: "35.53%",
    width: "29.93%",
    height: "28.75%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  style5: {
    top: "43.14%",
    left: "59%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 11,
    fontFamily: "avenir-roman"
  },
  style6: {
    top: "43.14%",
    left: "39.17%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-roman"
  },
  clothing: {
    top: "67.52%",
    left: "42.52%",
    width: "45.89%",
    height: "21.21%",
    position: "absolute"
  },
  oval3: {
    top: "11.97%",
    left: "11.97%",
    width: "78.42%",
    height: "78.42%",
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        rotate: "152deg"
      }
    ],
    borderColor: "transparent"
  },
  style7: {
    top: "42.23%",
    left: "36.42%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 34,
    fontFamily: "avenir-roman"
  },
  style8: {
    top: "44.21%",
    left: "56.32%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "avenir-roman"
  },
  rect9: {
    top: 0,
    left: 64.54,
    width: 60.91,
    height: 63.58,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  tshirt: {
    top: "0%",
    left: "35.26%",
    width: "30%",
    height: "30%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  button: {
    top: 828.5,
    left: "-1.33%",
    width: 425.04,
    height: 67.5,
    position: "absolute"
  },
  materialIconButtonsFooter: {
    top: 0,
    left: 0,
    width: 425.04,
    height: 67.5,
    backgroundColor: "rgba(184,233,134,1)",
    position: "absolute"
  },
  statusBar: {},
  cupertinoFooter1: {
    top: 99.71,
    left: "4.71%",
    width: 375,
    height: 49,
    backgroundColor: "rgba(188,231,132,1)",
    position: "absolute"
  }
});
