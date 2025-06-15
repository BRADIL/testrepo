import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CreatorCard } from '../../components/CreatorCard';
import { CampaignCard } from '../../components/CampaignCard';
import { theme } from '../../theme';

export const DashboardScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>Influencer Dashboard</Text>
    <CampaignCard status="Active" budget="$1000" reach="10k" />
    <CampaignCard status="Pending" budget="$500" reach="5k" />
  </ScrollView>
);
