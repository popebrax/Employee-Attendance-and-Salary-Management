import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const employeePerformanceline = () => {
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

  const fetchAttendanceReport = async () => {
    try {
      const response = await axios.get('http://192.168.43.99:8000/attendance-report-all-employees', {
        params: {
          month: 2,
          year: 2024,
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

            <View style={{ marginTop: 15, margin: 10, padding: 5, backgroundColor: '#FFC0CB', borderRadius: 5 }}>
              <LineChart
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

export default employeePerformanceline;
