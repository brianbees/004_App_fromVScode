import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageTest() {
  const [result, setResult] = useState('');

  const saveTest = async () => {
    try {
      await AsyncStorage.setItem('testKey', 'Hello from AsyncStorage!');
      setResult('Save successful!');
    } catch (err) {
      setResult('Save failed: ' + JSON.stringify(err));
    }
  };

  const readTest = async () => {
    try {
      const value = await AsyncStorage.getItem('testKey');
      setResult('Read value: ' + value);
    } catch (err) {
      setResult('Read failed: ' + JSON.stringify(err));
    }
  };

  return (
    <View style={{ padding: 24 }}>
      <Button title="Save Test Value" onPress={saveTest} />
      <Button title="Read Test Value" onPress={readTest} />
      <Text style={{ marginTop: 24 }}>{result}</Text>
    </View>
  );
}
