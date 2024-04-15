import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import axios from "axios";
import moment from "moment";

const SalarySummary = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, "months");
    setCurrentDate(nextMonth);
  };

  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, "months");
    setCurrentDate(prevMonth);
  };

  const formatDate = (date) => {
    return date.format("MMMM, YYYY");
  };

  const fetchAttendanceReport = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/attendance-report-all-employees",
        {
          params: {
            month: currentDate.month() + 1,
            year: currentDate.year(),
          },
        }
      );

      setAttendanceData(response.data.report);
    } catch (error) {
      console.log("Error fetching attendance");
    }
  };

  useEffect(() => {
    fetchAttendanceReport();
  }, [currentDate]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
        }}
      >
        <Text>{formatDate(currentDate)}</Text>
      </View>

      <View style={{ marginHorizontal: 12 }}>
        {attendanceData?.map((item, index) => (
          <View key={index} style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>{item?.name?.charAt(0)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item?.name}</Text>
                <Text style={{ marginTop: 5, color: "gray" }}>{item?.designation} ({item?.employeeId})</Text>
              </View>
            </View>

            <View style={{ marginTop: 15, margin: 5, padding: 5, backgroundColor: "#A1FFCE", borderRadius: 5 }}>
              <Text>Number of Days Present: {item?.present}</Text>
              <Text>Number of Half Days: {item?.halfday}</Text>
              <Text>Basic Salary: {item?.salary}</Text>
              <Text>Calculated Full-Day Salary: {parseFloat(item?.present) * parseFloat(item?.salary)}</Text>
              <Text>Calculated Half-Day Salary: {(parseFloat(item?.halfday) * parseFloat(item?.salary)) / 2}</Text>
              <Text>Net Salary: {(parseFloat(item?.present) * parseFloat(item?.salary)) + ((parseFloat(item?.halfday) * parseFloat(item?.salary)) / 2)}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SalarySummary;
