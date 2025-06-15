import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../theme';

export const WalletScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24 }}>Wallet</Text>
  </View>
);
