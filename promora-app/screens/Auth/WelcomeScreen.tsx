import React from 'react';
import { View, Text } from 'react-native';
import { GradientButton } from '../../components/GradientButton';
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 20 }}>
        Welcome to Promora
      </Text>
      <GradientButton text="I'm a Brand" onPress={() => navigation.navigate('Login', { role: 'Brand' })} />
      <View style={{ height: 12 }} />
      <GradientButton text="I'm an Influencer" onPress={() => navigation.navigate('Login', { role: 'Influencer' })} />
      <View style={{ height: 12 }} />
      <GradientButton text="Admin" onPress={() => navigation.navigate('Login', { role: 'Admin' })} />
    </View>
  );
};
