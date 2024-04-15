import { Pressable, StyleSheet, Text, View, ScrollView, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import {
  Feather,
  Entypo,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { BarCodeScanner } from "react-native-camera"; // Import the QR code scanning library

const markemployee = () => {
  const buttonPressHandler = (route) => {
    router.push(route);
  };
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment());
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    designation: "",
    name: "",
    employeeId: ""
  });
  const [searched, setSearched] = useState(false);

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://192.168.43.99:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);

  const [attendance, setAttendance] = useState([]);
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(`http://192.168.43.99:8000/attendance`, {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      const attendanceData = response.data;
      const employeeAttendance = attendanceData.find(
        (attendance) => attendance.employeeId === params?.id
      );
      if (employeeAttendance) {
        setAttendanceStatus(employeeAttendance.status);
        setAttendanceRecord(employeeAttendance);
      } else {
        setAttendanceStatus("");
        setAttendanceRecord(null);
      }
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  const handleScan = async (event) => {
    if (event.data) {
      setScanning(false);
      setScanResult(event.data);
      // Process the scanned data and mark attendance accordingly
      try {
        const scannedData = JSON.parse(event.data);
        const response = await axios.post(
          "http://192.168.43.99:8000/attendance",
          scannedData
        );
        if (response.status === 200) {
          console.log(`Attendance marked successfully for ${scannedData.employeeName}`);
        }
      } catch (error) {
        console.log("error marking attendance", error);
      }
    }
  };

  const filterEmployees = () => {
    // Filter employees based on search criteria
    const filteredEmployees = employees.filter(employee => {
      return (
        employee.designation.includes(searchCriteria.designation) &&
        employee.employeeName.includes(searchCriteria.name) &&
        employee.employeeId.includes(searchCriteria.employeeId)
      );
    });
    return filteredEmployees;
  };

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>

      <View style={styles.header}>
        <Pressable onPress={() => buttonPressHandler("/(home)/index1")}>
            <Feather name="bar-chart" size={24} color="black" />
          </Pressable>
          <Text style={styles.headerText}>Employee/Intern Checkin Checkout</Text>
          <Entypo name="lock" size={24} color="black" />
        </View>

      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Designation"
          value={searchCriteria.designation}
          onChangeText={text => setSearchCriteria({ ...searchCriteria, designation: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={searchCriteria.name}
          onChangeText={text => setSearchCriteria({ ...searchCriteria, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Employee ID"
          value={searchCriteria.employeeId}
          onChangeText={text => setSearchCriteria({ ...searchCriteria, employeeId: text })}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {searched && (
        <View style={styles.container}>
          {filterEmployees().map((item, index) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/useremployee",
                  params: {
                    name: item.employeeName,
                    id: item.employeeId,
                    salary: item?.salary,
                    designation: item?.designation,
                  },
                })
              }
              onLongPress={() => setScanning(true)}
              key={index}
              style={styles.employeeContainer}
            >
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{item?.employeeName?.charAt(0)}</Text>
              </View>
              <View style={styles.employeeInfo}>
                <Text style={styles.employeeName}>{item?.employeeName}</Text>
                <Text style={styles.designation}>{item?.designation} ({item?.employeeId})</Text>
              </View>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>{scanResult && scanResult === item.employeeId ? 'Scanned' : ''}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterContainer: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    marginHorizontal: 12,
  },
  employeeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    padding: 15,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4b6cb7",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 16,
  },
  employeeInfo: {
    flex: 1,
    marginLeft: 10,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  designation: {
    marginTop: 5,
    color: "gray",
  },
  statusContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#FF69B4",
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default markemployee;
