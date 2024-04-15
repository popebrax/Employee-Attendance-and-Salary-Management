import React from "react";
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

const Index1 = () => {
  const router = useRouter();

  const buttons = [
    { icon: "people", text: "View Employee List", route: "/(home)/employees", color: "#66BB6A" }, // Green
    { icon: "people", text: "View Daily Attendance", route: "/(home)/markattendance", color: "#EF5350" }, // Red
    { icon: "alarm-outline", text: "Attendance Report", route: "/(home)/summary", color: "#AB47BC" }, // Purple
    { icon: "newspaper-outline", text: "Summary Report", route: "/(home)/summary2", color: "#AB47BC" }, // Purple
    { icon: "cloud-download-outline", text: "Salary Report", route: "/(home)/salary", color: "#AB47BC" }, // Purple
    { icon: "people", text: "Overtime Employees", route: "/(home)/markattendance", color: "#AB47BC" }, // Purple
    //{ icon: "reorder-four-outline", text: "Attendance Criteria", route: "/(home)/criteria", color: "#FFC107" }, // Yellow
    //{ icon: "analytics-outline", text: "Increased Workflow", route: "/(home)/criteria", color: "#78909C" }, // Blue Grey
    //{ icon: "cash-outline", text: "Cost Savings", route: "/(home)/costsavings", color: "#607D8B" }, // Blue Grey
    { icon: "bar-chart", text: "Employee Performance", route: "/(home)/Employeeperformance", color: "#757575" }, // Grey
  ];

  const buttonPressHandler = (route) => {
    router.push(route);
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#CFD8DC", "#90A4AE"]} style={styles.gradient}>
        <View style={styles.header}>
        <Pressable onPress={() => buttonPressHandler("/(home)/allemployees")}>
            <Feather name="bar-chart" size={24} color="black" />
          </Pressable>
          <Text style={styles.headerText}>Admin Management</Text>
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
      </LinearGradient>
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

export default Index1;
