import React from 'react';
import { ScrollView, Text } from 'react-native';
import { theme } from '../../theme';
import { CreatorCard } from '../../components/CreatorCard';

export const ReviewsScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Reviews</Text>
    <CreatorCard name="Brand" rating={5} followers={0} />
  </ScrollView>
);
