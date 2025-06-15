import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ChatMessage } from '../../components/ChatMessage';
import { theme } from '../../theme';

export const ChatScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Chat</Text>
    <ChatMessage sender="Influencer" text="Hello" time="10:00" />
  </ScrollView>
);
