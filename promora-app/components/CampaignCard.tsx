import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../theme';

interface Props {
  status: string;
  budget: string;
  reach: string;
}

export const CampaignCard: React.FC<Props> = ({ status, budget, reach }) => (
  <View style={{ backgroundColor: 'white', borderRadius: theme.borderRadius, padding: 16, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3, marginBottom: 12 }}>
    <Text style={{ fontFamily: theme.fontFamily }}>{`Status: ${status}`}</Text>
    <Text>{`Budget: ${budget}`}</Text>
    <Text>{`Reach: ${reach}`}</Text>
  </View>
);
