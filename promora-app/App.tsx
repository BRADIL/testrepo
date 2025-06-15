import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from './screens/Auth/LoginScreen';
import { SignupScreen } from './screens/Auth/SignupScreen';
import { DashboardScreen } from './screens/Influencer/DashboardScreen';
import { DiscoverScreen } from './screens/Brand/DiscoverScreen';
import { AdminDashboardScreen } from './screens/Admin/AdminDashboardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Signup" component={SignupScreen} />
        <Tab.Screen name="Influencer" component={DashboardScreen} />
        <Tab.Screen name="Brand" component={DiscoverScreen} />
        <Tab.Screen name="Admin" component={AdminDashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
