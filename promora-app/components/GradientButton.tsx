import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

interface Props {
  text: string;
  onPress?: () => void;
}

export const GradientButton: React.FC<Props> = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={theme.colors.gradient}
      style={{ borderRadius: theme.borderRadius, padding: 12 }}
    >
      <Text style={{ color: 'white', textAlign: 'center', fontFamily: theme.fontFamily }}>
        {text}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);
