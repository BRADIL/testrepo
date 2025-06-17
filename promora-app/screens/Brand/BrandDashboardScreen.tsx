import React from 'react';
import { ScrollView, Text } from 'react-native';
import { CampaignCard } from '../../components/CampaignCard';
import { CreatorCard } from '../../components/CreatorCard';
import { theme } from '../../theme';

export const BrandDashboardScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>
      Brand Dashboard
    </Text>
    <CampaignCard status="Active" budget="$2000" reach="20k" />
    <CreatorCard name="Top Influencer" rating={4.9} followers={50000} />
  </ScrollView>
);
