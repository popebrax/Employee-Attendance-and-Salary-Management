import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const summary2 = () => {
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
      const currentMonth = currentDate.month() + 1; // Month is zero-based, so we add 1
      const currentYear = currentDate.year();

      const response = await axios.get('http://192.168.43.99:8000/attendance-report-all-employees', {
        params: {
          month: currentMonth,
          year: currentYear,
        },
      });

      setAttendanceData(response.data.report);
    } catch (error) {
      console.log('Error fetching attendance', error);
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
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <AntDesign
          onPress={goToPrevMonth}
          name="left"
          size={24}
          color="black"
        />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign
          onPress={goToNextMonth}
          name="right"
          size={24}
          color="black"
        />
      </View>

      <View style={{ marginHorizontal: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          <Text style={{ flex: 1, fontWeight: "bold" }}>Employee</Text>
          <Text style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Present</Text>
          <Text style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Absent</Text>
          <Text style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Half Day</Text>
          <Text style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Holidays</Text>
          <Text style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Weekends</Text>
        </View>

        {attendanceData?.map((item, index) => (
          <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{item?.name} ({item?.designation})</Text>
            <Text style={{ flex: 1, textAlign: "center" }}>{item?.present}</Text>
            <Text style={{ flex: 1, textAlign: "center" }}>{item?.absent}</Text>
            <Text style={{ flex: 1, textAlign: "center" }}>{item?.halfday}</Text>
            <Text style={{ flex: 1, textAlign: "center" }}>1</Text>
            <Text style={{ flex: 1, textAlign: "center" }}>8</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default summary2;
