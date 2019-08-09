import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import CupertinoSearchBarWithMic1 from "../symbols/CupertinoSearchBarWithMic1";

export default class PurchasesPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.purchase1}>
          <View style={styles.rectangle} />
          <Svg viewBox={"-0 -0 50 50"} style={styles.oval}>
            <Path
              strokeWidth={0}
              fill={"rgba(157,209,241,1)"}
              d={
                "M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 C38.81 50.00 25.00 50.00 25.00 50.00 Z"
              }
            />
          </Svg>
          <Text style={styles.amazon}>Amazon</Text>
          <Text style={styles.nikeAirForce1Sag}>
            Nike Air Force 1 Sage Low Sneaker White
          </Text>
          <Text style={styles.style}>$107.86</Text>
          <Text style={styles.style1}>8/8</Text>
          <Image
            source={require("../assets/images/f36c4b7e36bb2591bc7cb02e551b8e28c7763dba.png")}
            style={styles.sneakers}
          />
        </View>
        <View style={styles.purchase2}>
          <View style={styles.rectangle1} />
          <Svg viewBox={"-0 -0 50 50"} style={styles.oval1}>
            <Path
              strokeWidth={0}
              fill={"rgba(157,209,241,1)"}
              d={
                "M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 C38.81 50.00 25.00 50.00 25.00 50.00 Z"
              }
            />
          </Svg>
          <Text style={styles.style2}>8/5</Text>
          <Text style={styles.amazon1}>Amazon</Text>
          <Text style={styles.smegMintGreenRetr}>
            SMEG Mint Green Retro Toaster
          </Text>
          <Image
            source={require("../assets/images/1679f7567e111bff1eb6ed0f6407d941b88132e9.png")}
            style={styles.toaster}
          />
          <Text style={styles.style3}>$199.95</Text>
        </View>
        <View style={styles.purchase3}>
          <View style={styles.rectangle2} />
          <Svg viewBox={"-0 -0 50 50"} style={styles.oval2}>
            <Path
              strokeWidth={0}
              fill={"rgba(157,209,241,1)"}
              d={
                "M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 C38.81 50.00 25.00 50.00 25.00 50.00 Z"
              }
            />
          </Svg>
          <Text style={styles.style4}>8/5</Text>
          <Text style={styles.amazon2}>Amazon</Text>
          <Text style={styles.pepperidgeFarmsGol}>
            Pepperidge Farms Goldfish Flavor Blasted Cheesy Pizza
          </Text>
          <View style={styles.rectangle3} />
          <Text style={styles.style5}>$3.00</Text>
          <Image
            source={require("../assets/images/4073ee76c2546fa34bdb2c1dc65de8dded85c7af.png")}
            style={styles.goldfish}
          />
        </View>
        <View style={styles.purchase4}>
          <View style={styles.rectangle4} />
          <Svg viewBox={"-0 -0 50 50"} style={styles.oval3}>
            <Path
              strokeWidth={0}
              fill={"rgba(157,209,241,1)"}
              d={
                "M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 C38.81 50.00 25.00 50.00 25.00 50.00 Z"
              }
            />
          </Svg>
          <Text style={styles.style6}>7/31</Text>
          <Text style={styles.amazon3}>Amazon</Text>
          <Text style={styles.crackingTheCoding}>
            Cracking the Coding Interview: 189 Program…
          </Text>
          <Text style={styles.style7}>$32.35</Text>
          <Image
            source={require("../assets/images/cfb7d9a78d8dd66c20a2fc6eca823cd74f87b773.png")}
            style={styles.book}
          />
        </View>
        <View style={styles.more}>
          <Svg viewBox={"-0.5 -0.5 10 10"} style={styles.oval4}>
            <Path
              strokeWidth={1}
              fill={"rgba(255,255,255,1)"}
              stroke={"rgba(3,75,86,1)"}
              d={
                "M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 C6.21 8.00 4.00 8.00 4.00 8.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0.5 -0.5 10 10"} style={styles.oval5}>
            <Path
              strokeWidth={1}
              fill={"rgba(255,255,255,1)"}
              stroke={"rgba(3,75,86,1)"}
              d={
                "M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 C6.21 8.00 4.00 8.00 4.00 8.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0.5 -0.5 10 10"} style={styles.oval6}>
            <Path
              strokeWidth={1}
              fill={"rgba(255,255,255,1)"}
              stroke={"rgba(3,75,86,1)"}
              d={
                "M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 C6.21 8.00 4.00 8.00 4.00 8.00 Z"
              }
            />
          </Svg>
        </View>
        <View style={styles.sortOption}>
          <View style={styles.rectangle5} />
          <View style={styles.rectangle6} />
          <View style={styles.rectangle7} />
          <View style={styles.rectangle8} />
          <Text style={styles.sortAndFilter}>Sort and Filter</Text>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.category}>Category</Text>
          <Text style={styles.brand}>Brand</Text>
          <Image
            source={require("../assets/images/63607ed650cc162fba477e992c8c249c04ecaea3.png")}
            style={styles.sort}
          />
        </View>
        <View style={styles.topNav}>
          <Image
            source={require("../assets/images/4b19cc0c9c5cfd401327c87243446b0da341c0f3.png")}
            style={styles.clock}
          />
          <Text style={styles.purchaseHistory}>Purchase History</Text>
          <View style={styles.rectangle9} />
        </View>
        <CupertinoSearchBarWithMic1 style={styles.cupertinoSearchBarWithMic1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  purchase1: {
    top: "21.99%",
    left: "2.42%",
    width: "91.06%",
    height: "8.93%",
    position: "absolute"
  },
  rectangle: {
    top: "0.00%",
    left: "5.04%",
    width: "94.69%",
    height: "100.00%",
    backgroundColor: "rgba(241,255,231,1)",
    position: "absolute",
    borderRadius: 8
  },
  oval: {
    top: "18.75%",
    left: "0.00%",
    width: "13.26%",
    height: "62.50%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  amazon: {
    top: "10.00%",
    left: "17.77%",
    color: "rgba(3,75,86,0.6)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "avenir-roman"
  },
  nikeAirForce1Sag: {
    top: "38.75%",
    left: "17.77%",
    width: "45.09%",
    height: 38,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "avenir-roman"
  },
  style: {
    top: "6.25%",
    left: "64.72%",
    width: "19.63%",
    height: 20,
    color: "rgba(95,168,211,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-heavy"
  },
  style1: {
    top: "36.25%",
    left: "3.45%",
    color: "rgba(61,85,104,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "avenir-roman"
  },
  sneakers: {
    top: "0.00%",
    left: "85.59%",
    width: "14.24%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  purchase2: {
    top: "33.15%",
    left: "2.66%",
    width: "90.82%",
    height: "8.93%",
    position: "absolute"
  },
  rectangle1: {
    top: "0.00%",
    left: "4.79%",
    width: "94.95%",
    height: "100.00%",
    backgroundColor: "rgba(241,255,231,1)",
    position: "absolute",
    borderRadius: 8
  },
  oval1: {
    top: "18.75%",
    left: "0.00%",
    width: "13.30%",
    height: "62.50%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  style2: {
    top: "36.25%",
    left: "3.46%",
    color: "rgba(61,85,104,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "avenir-roman"
  },
  amazon1: {
    top: "7.50%",
    left: "17.55%",
    color: "rgba(3,75,86,0.6)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "avenir-roman"
  },
  smegMintGreenRetr: {
    top: "36.25%",
    left: "17.55%",
    width: "45.21%",
    height: 38,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "avenir-roman"
  },
  toaster: {
    top: "0.00%",
    left: "85.64%",
    width: 53.67,
    height: 80,
    backgroundColor: "transparent",
    position: "absolute"
  },
  style3: {
    top: "6.25%",
    left: "64.63%",
    width: "19.68%",
    height: 20,
    color: "rgba(95,168,211,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-heavy"
  },
  purchase3: {
    top: "43.86%",
    left: "2.66%",
    width: "95.17%",
    height: "9.93%",
    position: "absolute"
  },
  rectangle2: {
    top: "4.49%",
    left: "4.57%",
    width: "90.61%",
    height: "89.89%",
    backgroundColor: "rgba(241,255,231,1)",
    position: "absolute",
    borderRadius: 8
  },
  oval2: {
    top: "21.35%",
    left: "0.00%",
    width: "12.69%",
    height: "56.18%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  style4: {
    top: "37.08%",
    left: "3.30%",
    color: "rgba(61,85,104,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "avenir-roman"
  },
  amazon2: {
    top: "11.24%",
    left: "16.75%",
    color: "rgba(3,75,86,0.6)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "avenir-roman"
  },
  pepperidgeFarmsGol: {
    top: "37.08%",
    left: "16.75%",
    width: "46.70%",
    height: 38,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "avenir-roman"
  },
  rectangle3: {
    top: "4.49%",
    left: "81.73%",
    width: "13.96%",
    height: "89.89%",
    backgroundColor: "rgba(216,240,240,1)",
    position: "absolute"
  },
  style5: {
    top: "10.11%",
    left: "61.68%",
    width: "18.78%",
    height: 20,
    color: "rgba(95,168,211,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-heavy"
  },
  goldfish: {
    top: "0.00%",
    left: "77.41%",
    width: "22.59%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  purchase4: {
    top: "55.47%",
    left: "2.66%",
    width: "91.06%",
    height: "8.93%",
    position: "absolute"
  },
  rectangle4: {
    top: "0.00%",
    left: "4.77%",
    width: "94.69%",
    height: "100.00%",
    backgroundColor: "rgba(241,255,231,1)",
    position: "absolute",
    borderRadius: 8
  },
  oval3: {
    top: "18.75%",
    left: "0.00%",
    width: "13.26%",
    height: "62.50%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  style6: {
    top: "36.25%",
    left: "2.39%",
    color: "rgba(61,85,104,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "avenir-roman"
  },
  amazon3: {
    top: "7.50%",
    left: "17.51%",
    color: "rgba(3,75,86,0.6)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "avenir-roman"
  },
  crackingTheCoding: {
    top: "36.25%",
    left: "17.51%",
    width: "45.09%",
    height: 38,
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "avenir-roman"
  },
  style7: {
    top: "6.25%",
    left: "64.46%",
    width: "19.63%",
    height: 20,
    color: "rgba(95,168,211,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "avenir-heavy"
  },
  book: {
    top: "0.00%",
    left: "85.15%",
    width: "14.85%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  more: {
    top: "66.74%",
    left: "40.10%",
    width: "17.87%",
    height: "0.89%",
    position: "absolute"
  },
  oval4: {
    top: "-6.25%",
    left: "-0.68%",
    width: "13.51%",
    height: "125.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval5: {
    top: "-6.25%",
    left: "43.92%",
    width: "13.51%",
    height: "125.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval6: {
    top: "-6.25%",
    left: "88.51%",
    width: "13.51%",
    height: "125.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  sortOption: {
    top: "72.66%",
    left: "6.28%",
    width: "85.51%",
    height: "10.83%",
    position: "absolute"
  },
  rectangle5: {
    top: "64.95%",
    left: "0.00%",
    width: "100.00%",
    height: "35.05%",
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 5,
    borderColor: "rgba(95,168,211,1)",
    borderWidth: 0.8
  },
  rectangle6: {
    top: "64.95%",
    left: "0.00%",
    width: "33.33%",
    height: "35.05%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "rgba(95,168,211,1)",
    borderWidth: 0.8
  },
  rectangle7: {
    top: "64.95%",
    left: "33.33%",
    width: "33.33%",
    height: "35.05%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "rgba(95,168,211,1)",
    borderWidth: 0.8
  },
  rectangle8: {
    top: "64.95%",
    left: "66.67%",
    width: "33.33%",
    height: "35.05%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "rgba(95,168,211,1)",
    borderWidth: 0.8
  },
  sortAndFilter: {
    top: "2.06%",
    left: "0.00%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "avenir-roman"
  },
  date: {
    top: "72.16%",
    left: "11.86%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  category: {
    top: "72.16%",
    left: "40.96%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  brand: {
    top: "72.16%",
    left: "77.68%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "avenir-roman"
  },
  sort: {
    top: "-6.18%",
    left: "57.91%",
    width: "11.58%",
    height: "42.27%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  topNav: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "19.75%",
    position: "absolute"
  },
  clock: {
    top: "71.46%",
    left: "64.06%",
    width: "9.9%",
    height: "23.16%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  purchaseHistory: {
    top: "76.84%",
    left: "7.00%",
    color: "rgba(3,75,86,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "avenir-roman"
  },
  rectangle9: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "65.54%",
    backgroundColor: "rgba(167,205,204,1)",
    position: "absolute",
    overflow: "hidden"
  },
  cupertinoSearchBarWithMic1: {
    top: 50.48,
    left: 19.5,
    width: 375,
    height: 44,
    position: "absolute"
  }
});
