import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../theme';

export const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24 }}>Profile</Text>
  </View>
);
