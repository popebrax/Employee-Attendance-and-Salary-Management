import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

const User = () => {
  const params = useLocalSearchParams();
  const [currentDate, setCurrentDate] = useState(moment());
  const [attendanceRecord, setAttendanceRecord] = useState(null);

  useEffect(() => {
    fetchAttendanceRecord();
  }, [currentDate]);

  const fetchAttendanceRecord = async () => {
    try {
      const response = await axios.get(
        `http://192.168.43.99:8000/attendance/${params?.id}?date=${currentDate.format("MMMM D, YYYY")}`
      );
      setAttendanceRecord(response.data);
    } catch (error) {
      console.log("Error fetching attendance record", error);
    }
  };

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

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
        <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
      </View>

      <Pressable
        style={{
          marginVertical: 10,
          marginHorizontal: 12,
          flexDirection: "row",
          gap: 10,
        }}
      >
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
          <Text style={{ color: "white", fontSize: 16 }}>
            {params?.name.charAt(0)}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {params?.name}
          </Text>
          <Text style={{ marginTop: 5, color: "gray" }}>
            {params?.designation} ({params?.id})
          </Text>
        </View>
      </Pressable>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 12 }}>
        Basic Pay : {params?.salary}
      </Text>
      <View style={{ marginHorizontal: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            letterSpacing: 3,
            marginTop: 7,
          }}
        >
          ATTENDANCE
        </Text>
        {attendanceRecord ? (
          <View>
            <Text style={{ marginTop: 10 }}>
              Check-in Time:{" "}
              {attendanceRecord.checkinTime
                ? attendanceRecord.checkinTime
                : "N/A"}
            </Text>
            <Text style={{ marginTop: 5 }}>
              Check-out Time:{" "}
              {attendanceRecord.checkoutTime
                ? attendanceRecord.checkoutTime
                : "N/A"}
            </Text>
          </View>
        ) : (
          <Text>No attendance record found for today.</Text>
        )}
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});