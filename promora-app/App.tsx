import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens/Auth/WelcomeScreen';
import { LoginScreen } from './screens/Auth/LoginScreen';
import { SignupScreen } from './screens/Auth/SignupScreen';
import { ForgotPasswordScreen } from './screens/Auth/ForgotPasswordScreen';
import { OnboardingScreen } from './screens/Auth/OnboardingScreen';
import { DashboardScreen as InfluencerDashboard } from './screens/Influencer/DashboardScreen';
import { DiscoverScreen } from './screens/Brand/DiscoverScreen';
import { BrandDashboardScreen } from './screens/Brand/BrandDashboardScreen';
import { AdminDashboardScreen } from './screens/Admin/AdminDashboardScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BrandTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={BrandDashboardScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}

function InfluencerTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={InfluencerDashboard} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Brand" component={BrandTabs} />
        <Stack.Screen name="Influencer" component={InfluencerTabs} />
        <Stack.Screen name="Admin" component={AdminDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
