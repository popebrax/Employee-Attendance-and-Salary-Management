import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const buttons = [
    { icon: "people", text: "Employee List", route: "/(home)/employees", color: "#55EFC4" },
    { icon: "people", text: "Mark Attendance", route: "/(home)/markattendance", color: "#FFA69E" },
    { icon: "newspaper-outline", text: "Attendance Report", route: "/(home)/summary", color: "#E84393" },
    { icon: "repo-pull", text: "Summary Report", route: "/(home)/summary", color: "#E84393" },
    { icon: "report", text: "All Generate Reports", route: "/(home)/salary", color: "#E84393" },
    { icon: "people", text: "Overtime Employees", route: "/(home)/markattendance", color: "#E84393" },
    { icon: "arrows-down-to-people", text: "Attendance Criteria", route: "/(home)/criteria", color: "#f79d00" },
    { icon: "human-capacity-increase", text: "Increased Workflow", route: "/(home)/criteria", color: "#ABCABA" },
    { icon: "savings", text: "Cost Savings", route: "/(home)/costsavings", color: "#D3CCE3" },
    { icon: "bar-chart", text: "Employee Performance", route: "/(home)/Employeeperformance", color: "#bdc3c7" },
  ];

  const buttonPressHandler = (route) => {
    router.push(route);
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#8B939A", "#5B6467"]} style={styles.gradient}>
        <View style={styles.header}>
          <Feather name="bar-chart" size={24} color="black" />
          <Text style={styles.headerText}>Employee Management System</Text>
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
    fontSize: 16,
    fontWeight: "600",
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
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
  },
});

export default Index;
