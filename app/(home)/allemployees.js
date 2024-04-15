import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit';

const allemployees = () => {
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
            {/* Pie Chart */}
            <View style={{ marginTop: 15, margin: 10, padding: 5, borderRadius: 5 }}>
              <PieChart
                data={[
                  {
                    name: 'Present',
                    population: item?.present,
                    color: '#4CAF50',
                    legendFontColor: '#7F7F7F',
                    legendFontSize: 15,
                  },
                  {
                    name: 'Absent',
                    population: item?.absent,
                    color: '#FF5252',
                    legendFontColor: '#7F7F7F',
                    legendFontSize: 15,
                  },
                  {
                    name: 'Half Day',
                    population: item?.halfday,
                    color: '#FFC107',
                    legendFontColor: '#7F7F7F',
                    legendFontSize: 15,
                  },
                ]}
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
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
              />
            </View>

            {/* Histogram */}
            <View style={{ marginTop: 15, margin: 10, padding: 5, borderRadius: 5 }}>
              <BarChart
                data={{
                  labels: ['Present', 'Absent', 'Half Day', 'H', 'NW'],
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

            {/* Cartesian Graph (Line Chart) */}
            <View style={{ marginTop: 15, margin: 10, padding: 5, borderRadius: 5 }}>
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

export default allemployees;
