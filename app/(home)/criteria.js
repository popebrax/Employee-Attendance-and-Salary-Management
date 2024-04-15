import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Criteria = () => {
  return (
    <LinearGradient colors={["#e66465", "#9198e5"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Attendance Marking Criteria</Text>

        <View style={styles.criteriaContainer}>
          <Text style={styles.criteriaText}>
            <Text style={styles.criteriaHighlight}>P:</Text> Present - Employee is present on the workday.
          </Text>

          <Text style={styles.criteriaText}>
            <Text style={styles.criteriaHighlight}>NW:</Text> Weekends - Employees are not required to report for work.
          </Text>

          <Text style={styles.criteriaText}>
            <Text style={styles.criteriaHighlight}>H:</Text> Half Day - Employees work until noon or a specified time.
          </Text>

          <Text style={styles.criteriaText}>
            <Text style={styles.criteriaHighlight}>A:</Text> Absent - Employee is absent on the workday.
          </Text>

          <Text style={styles.criteriaText}>
            <Text style={styles.criteriaHighlight}>HD:</Text> Holiday - It's a holiday, and employees are not expected at work.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 12,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  criteriaContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 12,
  },
  criteriaText: {
    color: '#2E2E2E',
    fontSize: 16,
    marginBottom: 8,
  },
  criteriaHighlight: {
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
});

export default Criteria;
