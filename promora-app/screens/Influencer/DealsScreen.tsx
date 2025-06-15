import React from 'react';
import { ScrollView, Text } from 'react-native';
import { CampaignCard } from '../../components/CampaignCard';
import { theme } from '../../theme';

export const DealsScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Deals</Text>
    <CampaignCard status="Completed" budget="$800" reach="8k" />
  </ScrollView>
);
