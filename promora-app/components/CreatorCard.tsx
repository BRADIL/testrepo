import React from 'react';
import { View, Text, Image } from 'react-native';
import { theme } from '../theme';

interface Props {
  name: string;
  rating: number;
  followers: number;
}

export const CreatorCard: React.FC<Props> = ({ name, rating, followers }) => (
  <View style={{ backgroundColor: 'white', borderRadius: theme.borderRadius, padding: 16, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3, marginBottom: 12 }}>
    <Image source={{ uri: 'https://via.placeholder.com/60' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 16 }}>{name}</Text>
    <Text>{`Rating: ${rating}`}</Text>
    <Text>{`Followers: ${followers}`}</Text>
  </View>
);
