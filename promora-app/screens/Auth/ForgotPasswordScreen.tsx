import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { GradientButton } from '../../components/GradientButton';
import { theme } from '../../theme';

export const ForgotPasswordScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>
      Reset Password
    </Text>
    <TextInput placeholder="Email" style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} />
    <GradientButton text="Send Reset Link" onPress={() => {}} />
  </View>
);
