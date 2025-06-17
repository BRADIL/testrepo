import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { GradientButton } from '../../components/GradientButton';
import { theme } from '../../theme';

export const OnboardingScreen = () => {
  const [step, setStep] = useState(1);
  const next = () => setStep(step + 1);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontFamily: theme.fontFamily, fontSize: 24, marginBottom: 12 }}>
        {`Onboarding Step ${step}`}
      </Text>
      <GradientButton text={step >= 3 ? 'Finish' : 'Next'} onPress={next} />
    </View>
  );
};
