import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from 'react-native';

const costsavings = () => {
  const reasons = [
    {
      title: 'Optimized Payroll Management',
      description: 'Automate timekeeping, calculations, and tax compliance, reducing errors and minimizing manual effort.',
      color: '#333333', // High-contrast black for text
    },
    {
      title: 'Improved Talent Acquisition and Retention',
      description: 'Attract and retain top talent with competitive compensation packages, structured performance reviews, and clear career pathways, leading to higher productivity and lower recruitment costs.',
      color: '#f2f2f2', // High-contrast white for text
    },
    {
      title: 'Enhanced Data-Driven Decision Making',
      description: 'Gain insights into employee costs, performance, and trends to identify areas for optimization and cost reduction.',
      color: '#333333', // High-contrast black for text
    },
    {
      title: 'Streamlined Administrative Processes',
      description: 'Automate leave management, approvals, and other HR tasks, saving time and resources while improving employee experience.',
      color: '#f2f2f2', // High-contrast white for text
    },
    {
        title: 'Reduced Overtime Costs',
        description: 'Efficient scheduling and workload management can minimize overtime, leading to significant cost savings.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Improved Compliance Management',
        description: 'Reduce legal and financial risks by ensuring compliance with labor laws and regulations, avoiding penalties.',
        color: '#f2f2f2', // High-contrast white for text
      },
      {
        title: 'Enhanced Training and Development',
        description: 'Invest in employee skills and knowledge, leading to improved performance, reduced errors, and fewer accidents.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Boosted Employee Morale and Productivity',
        description: 'A positive work environment with fair compensation and opportunities fosters employee engagement and reduces turnover, boosting productivity.',
        color: '#f2f2f2', // High-contrast white for text
      },
      {
        title: 'Improved Communication and Collaboration',
        description: 'Effective communication tools and collaborative platforms enhance teamwork, leading to faster problem-solving and reduced rework.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Smarter Talent Management',
        description: 'Identify high-performing employees, assess training needs, and promote from within, maximizing talent value.',
        color: '#f2f2f2', // High-contrast white for text
      },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <LinearGradient colors={["#e66465", "#9198e5"]} style={styles.gradient}>
        <Text style={styles.heading}>Reasons Why Employee Salary and Management Systems Save Costs</Text>
        <View style={styles.listContainer}>
          {reasons.map((reason, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listTitle} color={reason.color}>
                {reason.title}
              </Text>
              <Text style={styles.listDescription}>{reason.description}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    marginBottom: 15,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listDescription: {
    fontSize: 16,
  },
});

export default costsavings;
