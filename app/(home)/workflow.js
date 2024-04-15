import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from 'react-native';

const workflow = () => {
  const reasons = [
    {
        title: 'Streamlined Task Management and Automation',
        description: 'Automate repetitive tasks like approvals, scheduling, and data entry, freeing up employee time for more strategic work.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Enhanced Collaboration and Communication',
        description: 'Provide centralized platforms for document sharing, messaging, and real-time updates, fostering teamwork and improving project efficiency.',
        color: '#f2f2f2', // High-contrast white for text
      },
      {
        title: 'Improved Visibility and Transparency',
        description: 'Gain real-time insights into project progress, resource allocation, and team performance, enabling data-driven decision making.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Reduced Paperwork and Documentation',
        description: 'Digitize documents, automate recordkeeping, and simplify approvals, streamlining processes and minimizing errors.',
        color: '#f2f2f2', // High-contrast white for text
      },
      {
        title: 'Better Resource Management and Allocation',
        description: 'Allocate resources based on employee skills and availability, optimizing workload distribution and avoiding bottlenecks.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Enhanced Performance Management and Feedback',
        description: 'Track employee performance, provide timely feedback, and set clear goals, fostering continuous improvement and development.',
        color: '#f2f2f2', // High-contrast white for text
      },
      {
        title: 'Reduced Process Delays and Bottlenecks',
        description: 'Automate approvals, track task dependencies, and identify potential delays, ensuring smooth workflow and timely project completion.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Improved Training and Onboarding',
        description: 'Deliver consistent, automated training materials and track employee progress, accelerating onboarding and upskilling employees.',
        color: '#f2f2f2', // High-contrast white for text
      },
      {
        title: 'Reduced Administrative Overhead',
        description: 'Free up HR resources by automating routine tasks, enabling them to focus on strategic initiatives and employee engagement.',
        color: '#333333', // High-contrast black for text
      },
      {
        title: 'Increased Employee Satisfaction and Productivity',
        description: 'Empower employees with self-service tools, improve communication, and reduce workload, leading to higher engagement and productivity.',
        color: '#f2f2f2', // High-contrast white for text
      },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <LinearGradient colors={["#e66465", "#9198e5"]} style={styles.gradient}>
        <Text style={styles.heading}>Reasons Why Employee Salary and Management Systems Improves Workflow</Text>
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

export default workflow;
