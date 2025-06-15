import React from 'react';
import { ScrollView, Text } from 'react-native';
import { CreatorCard } from '../../components/CreatorCard';
import { theme } from '../../theme';

export const SavedCreatorsScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Saved Creators</Text>
    <CreatorCard name="Influencer" rating={4.7} followers={15000} />
  </ScrollView>
);
