import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ScorePanelStyles from '../src/components/ScorePanelStyles';

export default function Number1Screen() {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const { theme } = require('../design-system/DesignSystemProvider').useDS();
  const addPoints = (points: number) => {
    setHistory((prev) => [...prev, score]);
    setScore(score + points);
  };
  const undoLast = () => {
    if (history.length > 0) {
      setScore(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };
  const navigation = require('@react-navigation/native').useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <View style={{paddingHorizontal: 24, width: '100%', alignItems: 'center'}}>
        <View style={ScorePanelStyles.card}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: theme.colors.text }}>Player 1</Text>
          <TextInput
            style={ScorePanelStyles.playerName}
            placeholder="Player 1 - add name"
            value={playerName}
            onChangeText={setPlayerName}
            placeholderTextColor={theme.colors.text}
          />
          <View style={ScorePanelStyles.scoreBox}>
            <Text style={[ScorePanelStyles.scoreText, { color: theme.colors.text }]}>{score}</Text>
          </View>
          <View style={ScorePanelStyles.buttonRow}>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints(10)}>
              <Text style={ScorePanelStyles.buttonText}>+10 Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints(5)}>
              <Text style={ScorePanelStyles.buttonText}>+5 Points</Text>
            </TouchableOpacity>
          </View>
          <View style={[ScorePanelStyles.buttonRow, { justifyContent: 'center', marginTop: 10 }]}> 
            <TouchableOpacity style={[ScorePanelStyles.button, { backgroundColor: '#f5e9e0', flex: 1, maxWidth: '100%' }]} onPress={undoLast}>
              <Text style={ScorePanelStyles.buttonText}>Undo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* End Match Button */}
      <View style={{ marginTop: 32, alignItems: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: '#4dd0e1', width: 180, alignSelf: 'center', borderRadius: 8, paddingVertical: 12, alignItems: 'center', marginTop: 8, elevation: 2 }}
          onPress={() => {
            navigation.navigate('Winners', { playerName: playerName, score: score });
          }}
        >
          <Text style={{ color: theme.colors.text, fontSize: 18, fontWeight: 'bold' }}>End Match</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Styles now imported from ScorePanelStyles
