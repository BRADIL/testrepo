import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../theme';

export const BrandSettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24 }}>Brand Settings</Text>
  </View>
);
