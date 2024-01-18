import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Ravinder = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}><RadioGroup style={styles.BHNVuols} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="column"></RadioGroup><Switch style={styles.ARZyXxXw} value={true}></Switch><ActivityIndicator style={styles.BUIayRWm}></ActivityIndicator><CheckBox style={styles.ORDciBwB} title="Checkbox Title" checked={true}></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  BHNVuols: {
    width: 120,
    height: 70
  },
  ARZyXxXw: {
    width: 50,
    height: 25
  },
  BUIayRWm: {
    width: 50,
    height: 50
  },
  ORDciBwB: {
    width: 183,
    height: 69
  }
});
export default Ravinder;