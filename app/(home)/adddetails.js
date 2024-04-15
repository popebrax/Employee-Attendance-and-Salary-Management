import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const adddetails = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
      email: email,
    };
    //view the employee data
    console.log(employeeData);
    //when adding an employee the backend api uses the defined link to add employee to the mongo database then try and catches if an error occurs
    axios
      .post('http://192.168.43.99:8000/addEmployee', employeeData)
      .then((response) => {
        Alert.alert(
          'Registration Successful',
          'You have been registered successfully'
        );
        setName('');
        setEmployeeId('');
        setDob('');
        setMobileNo('');
        setSalary('');
        setAddress('');
        setJoiningDate('');
        setDesignation('');
        setEmail('');
      })
      .catch((error) => {
        Alert.alert(
          'Registration Fail',
          'An error occurred during registration'
        );
        console.log('Registration failed', error);
        console.error('Error Response: ', error.response);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Add a New Employee</Text>

        <TextInput
          style={styles.input}
          placeholder="Kenya"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Full Name (First and last Name)</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Employee Id</Text>
        <TextInput
          value={employeeId}
          onChangeText={(text) => setEmployeeId(text)}
          style={styles.input}
          placeholder="Employee Id"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Designation</Text>
        <TextInput
          value={designation}
          onChangeText={(text) => setDesignation(text)}
          style={styles.input}
          placeholder="Designation"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          value={mobileNo}
          onChangeText={(text) => setMobileNo(text)}
          style={styles.input}
          placeholder="Mobile No"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          value={dob}
          onChangeText={(text) => setDob(text)}
          style={styles.input}
          placeholder="Enter Date of Birth"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Joining Date</Text>
        <TextInput
          value={joiningDate}
          onChangeText={(text) => setJoiningDate(text)}
          style={styles.input}
          placeholder="Joining Date"
          placeholderTextColor={'#888'}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text>Active Employee</Text>
          <Text>True</Text>
        </View>

        <Text style={styles.label}>Salary</Text>
        <TextInput
          value={salary}
          onChangeText={(text) => setSalary(text)}
          style={styles.input}
          placeholder="Enter Salary"
          placeholderTextColor={'#888'}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
          placeholder="Enter Address"
          placeholderTextColor={'#888'}
        />
        <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor={'#888'}
      />

        <Pressable
          onPress={handleRegister}
          style={styles.button}
          android_ripple={{ color: '#fff' }}
        >
          <Text style={styles.buttonText}>Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ABCABA',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

