import React from 'react';
import { ScrollView, Text } from 'react-native';
import { CampaignCard } from '../../components/CampaignCard';
import { theme } from '../../theme';

export const CampaignsScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Campaigns</Text>
    <CampaignCard status="Active" budget="$2000" reach="20k" />
  </ScrollView>
);
