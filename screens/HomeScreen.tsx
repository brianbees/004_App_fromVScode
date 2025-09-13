
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from '../src/components/GlobalStyles';
import { useDS } from '../design-system/DesignSystemProvider';

export default function HomeScreen({ navigation }: any) {
  const { theme } = useDS();
  const handleSelectNumber = (num: number) => {
    if (navigation) {
      navigation.navigate(`Number${num}`);
    }
  };

  const handleFooterPress = (where: string) => {
    if (!navigation) return;
    switch (where) {
      case 'Settings':
        navigation.getParent()?.navigate('MainTabs', { screen: 'Settings' });
        break;
      case 'PastScores':
        navigation.getParent()?.navigate('MainTabs', { screen: 'Past Scores' });
        break;
      case 'About':
        navigation.getParent()?.navigate('MainTabs', { screen: 'About' });
        break;
      case 'Home':
        navigation.getParent()?.navigate('MainTabs', { screen: 'Home' });
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}> 
      <View style={[GlobalStyles.infoBox, { backgroundColor: theme.colors.surface }]}> 
        <Text style={[GlobalStyles.infoText, { color: theme.colors.text }]}> 
          Welcome! Please select the number of players to begin. You can track scores and view past winners in this app.
        </Text>
      </View>
      <Text style={[GlobalStyles.title, { color: theme.colors.text }]}>Choose number of players</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', maxWidth: 420, paddingHorizontal: 8 }}>
        {[1, 2, 3, 4].map((num) => (
          <TouchableOpacity
            key={num}
            style={[GlobalStyles.button, { backgroundColor: '#fff' }]}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={`Select number ${num}`}
            onPress={() => handleSelectNumber(num)}
          >
            <Text style={[GlobalStyles.buttonText, { color: theme.colors.primary }]}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

