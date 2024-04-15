import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
   <Redirect href="/(home)/markemployee"/>
  )
}

export default index

const styles = StyleSheet.create({})





/*import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Feather,
  Entypo,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const buttons = [
    //{ icon: "people", text: "Admin", route: "/(home)/index1", color: "#66BB6A" }, 
    { icon: "people", text: "Employee", route: "/(home)/markemployee", color: "#EF5350" }, 

  ];

  const buttonPressHandler = (route) => {
    router.push(route);
  };

  return (
    <ScrollView style={styles.container}>
      
        <View style={styles.header}>
        <Pressable onPress={() => buttonPressHandler("/(home)/index1")}>
            <Feather name="bar-chart" size={24} color="black" />
          </Pressable>
          <Text style={styles.headerText}>Employee Salary & Management System</Text>
          <Entypo name="lock" size={24} color="black" />
        </View>

        <View style={styles.buttonsContainer}>
          {buttons.map((button, index) => (
            <Pressable
              key={index}
              onPress={() => buttonPressHandler(button.route)}
              style={[styles.button, { backgroundColor: button.color }]}
            >
              <View style={styles.buttonIcon}>
                <Ionicons name={button.icon} size={24} color="black" />
              </View>
              <Text style={styles.buttonText}>{button.text}</Text>
            </Pressable>
          ))}
        </View>
   
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18, // Increased font size for better readability
    fontWeight: "600",
    color: "black", // Maintained black color for better contrast
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  button: {
    width: windowWidth / 2.5,
    height: windowWidth / 2.5,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginTop: 7,
    fontWeight: "600",
    fontSize: 14, // Increased font size for better readability
    color: "black", // Maintained black color for better contrast
  },
});

export default Index;*/
