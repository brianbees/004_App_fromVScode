import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NumberStackParamList = {
  'Number Selector': undefined;
  Number1: undefined;
  Number2: undefined;
  Number3: undefined;
  Number4: undefined;
};

export default function NumberSelectorScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<NumberStackParamList>>();

  const handleSelectNumber = (num: number) => {
    switch (num) {
      case 1:
        navigation.navigate('Number1');
        break;
      case 2:
        navigation.navigate('Number2');
        break;
      case 3:
        navigation.navigate('Number3');
        break;
      case 4:
        navigation.navigate('Number4');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose number of players</Text>
      <View style={styles.numbersRow}>
        {[1, 2, 3, 4].map(num => (
          <TouchableOpacity key={num} style={styles.numberButton} onPress={() => handleSelectNumber(num)}>
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 420,
    paddingHorizontal: 32,
  },
  numberButton: {
    minWidth: 64,
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
});
