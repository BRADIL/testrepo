import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../theme';

interface Props {
  sender: string;
  text: string;
  time: string;
}

export const ChatMessage: React.FC<Props> = ({ sender, text, time }) => (
  <View style={{ marginVertical: 4 }}>
    <Text style={{ fontWeight: 'bold', fontFamily: theme.fontFamily }}>{sender}</Text>
    <Text>{text}</Text>
    <Text style={{ fontSize: 12 }}>{time}</Text>
  </View>
);
