
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Welcome! Please select the number of players to begin. You can track scores and view past winners in this app.
          </Text>
        </View>
        <Text style={styles.title}>Choose number of players</Text>
        <View style={styles.numbersRow}>
          {[1, 2, 3, 4].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.numberButton}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel={`Select number ${num}`}
              onPress={() => handleSelectNumber(num)}
            >
              <Text style={styles.numberText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const BUTTON_MIN_WIDTH = 64;

const styles = StyleSheet.create({
  infoBox: {
    width: '80%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 20,
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    color: '#0f1e36',
  },
  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 420,
    paddingHorizontal: 8,
  },
  numberButton: {
    minWidth: BUTTON_MIN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  numberText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  footerButton: {
    minWidth: BUTTON_MIN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  footerText: {
    fontSize: 14,
    color: 'red',
  },
});
