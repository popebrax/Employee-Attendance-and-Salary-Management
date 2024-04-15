import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';

const summary = () => {
  //define the constants required for the employee performance i.e attendance
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, 'months');
    setCurrentDate(nextMonth);
  };

  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, 'months');
    setCurrentDate(prevMonth);
  };

  const formatDate = (date) => {
    return date.format('MMMM, YYYY');
  };
 
//fetch the attendance report from mongodb using the api link below, PLEASE NOTE that inorder to get the reporrt for any month you need to change the params values for the month and year manually, and if there is an error, we catch it
const fetchAttendanceReport = async () => {
  try {
    const currentMonth = currentDate.month() + 1; // Month is zero-based, so we add 1
    const currentYear = currentDate.year();

    const response = await axios.get('http://localhost:8000/attendance-report-all-employees', {
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
//basically these are just the styles needed to make the code visulally presentable
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginVertical: 20,
        }}
      >
        <AntDesign onPress={goToPrevMonth} name="left" size={24} color="black" />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign onPress={goToNextMonth} name="right" size={24} color="black" />
      </View>

      <View style={{ marginHorizontal: 12 }}>
        {attendanceData?.map((item, index) => (
          <View key={index} style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: '#4b6cb7',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 16 }}>{item?.name?.charAt(0)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item?.name}</Text>
                <Text style={{ marginTop: 5, color: 'gray' }}>{item?.designation} ({item?.employeeId})</Text>
              </View>
            </View>

            <View style={{ marginTop: 15, margin:10, padding: 5, backgroundColor: '#FFC0CB', borderRadius: 5 }}>
              <BarChart
                data={{
                  labels: ['P', 'A', 'HD', 'H', 'NW'],
                  datasets: [
                    {
                      data: [item?.present, item?.absent, item?.halfday, 1, 8],
                    },
                  ],
                }}
                width={360}
                height={200}
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default summary;
