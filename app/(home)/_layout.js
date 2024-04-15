import { Stack } from "expo-router";

export default function Layout() {
  return (

    //This defines the layout of the screens and once defined here you need to declare a pressable and onpress router to visit the defined screen
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="index1" />
      <Stack.Screen name="employees" />
      <Stack.Screen name="adddetails" />
      <Stack.Screen name="markattendance" />
      <Stack.Screen name="markemployee" />
      <Stack.Screen name="[user]" />
      <Stack.Screen name="useremployee" />
      <Stack.Screen name="summary" />
      <Stack.Screen name="summary2" />
      <Stack.Screen name="Employeeperformance" />
      <Stack.Screen name="costsavings" />
      <Stack.Screen name="workflow" />
      <Stack.Screen name="criteria" />
      <Stack.Screen name="salary" />
      <Stack.Screen name="employeeperformanceline" />
      <Stack.Screen name="allemployees" />
    
    
      
    </Stack>
  );
}
