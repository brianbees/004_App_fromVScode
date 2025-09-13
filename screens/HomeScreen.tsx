
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from '../src/components/GlobalStyles';

export default function HomeScreen({ navigation }: any) {
  const handleSelectNumber = (num: number) => {
    // Switch to 'Number Selector' tab and open the correct NumberX screen in the stack
    if (navigation) {
      navigation.navigate('Number Selector', { screen: `Number${num}` });
    }
  };

  const handleFooterPress = (where: string) => {
    if (!navigation) return;
    switch (where) {
      case 'Settings':
        navigation.navigate('SettingsScreen');
        break;
      case 'PastScores':
        navigation.navigate('PastScoresScreen');
        break;
      case 'About':
        navigation.navigate('AboutScreen');
        break;
      case 'Home':
        navigation.navigate('HomeScreen');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={GlobalStyles.infoBox}>
        <Text style={GlobalStyles.infoText}>
          Welcome! Please select the number of players to begin. You can track scores and view past winners in this app.
        </Text>
      </View>
      <Text style={GlobalStyles.title}>Choose number of players</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', maxWidth: 420, paddingHorizontal: 8 }}>
        {[1, 2, 3, 4].map((num) => (
          <TouchableOpacity
            key={num}
            style={GlobalStyles.button}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={`Select number ${num}`}
            onPress={() => handleSelectNumber(num)}
          >
            <Text style={GlobalStyles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

