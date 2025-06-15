import React from 'react';
import { ScrollView, Text } from 'react-native';
import { CreatorCard } from '../../components/CreatorCard';
import { theme } from '../../theme';

export const DiscoverScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Discover Creators</Text>
    <CreatorCard name="Influencer" rating={4.8} followers={12000} />
  </ScrollView>
);
