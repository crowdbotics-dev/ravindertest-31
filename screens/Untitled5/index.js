import { useSelector } from "react-redux";
import { rest_auth_registration_resend_email_create } from "../../store/ravindertestAPI/restAuthDetails.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  const {
    entities: test123
  } = useSelector(state => state.test123);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(rest_auth_registration_resend_email_create({
      test: test123
    }));
  };

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={onSubmit}><Text style={styles.fJVWxphl}>Lorem ipsum…</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  fJVWxphl: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled5;