import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { GradientButton } from '../../components/GradientButton';
import { theme } from '../../theme';

export const LoginScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Login</Text>
    <TextInput placeholder="Email" style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} />
    <TextInput placeholder="Password" style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} secureTextEntry />
    <GradientButton text="Sign In" onPress={() => {}} />
  </View>
);
