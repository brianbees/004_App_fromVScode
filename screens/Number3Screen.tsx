import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// ...existing code...
import ScorePanelStyles from '../src/components/ScorePanelStyles';

export default function Number3Screen() {
  // Player 1 state
  const [player1Name, setPlayer1Name] = useState('');
  const [score1, setScore1] = useState(0);
  const [history1, setHistory1] = useState<number[]>([]);
  // Player 2 state
  const [player2Name, setPlayer2Name] = useState('');
  const [score2, setScore2] = useState(0);
  const [history2, setHistory2] = useState<number[]>([]);
  // Player 3 state
  const [player3Name, setPlayer3Name] = useState('');
  const [score3, setScore3] = useState(0);
  const [history3, setHistory3] = useState<number[]>([]);

  const addPoints1 = (points: number) => {
    setHistory1((prev) => [...prev, score1]);
    setScore1(score1 + points);
  };
  const undoLast1 = () => {
    if (history1.length > 0) {
      setScore1(history1[history1.length - 1]);
      setHistory1(history1.slice(0, -1));
    }
  };
  const addPoints2 = (points: number) => {
    setHistory2((prev) => [...prev, score2]);
    setScore2(score2 + points);
  };
  const undoLast2 = () => {
    if (history2.length > 0) {
      setScore2(history2[history2.length - 1]);
      setHistory2(history2.slice(0, -1));
    }
  };
  const addPoints3 = (points: number) => {
    setHistory3((prev) => [...prev, score3]);
    setScore3(score3 + points);
  };
  const undoLast3 = () => {
    if (history3.length > 0) {
      setScore3(history3[history3.length - 1]);
      setHistory3(history3.slice(0, -1));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 16 }}>
        {/* Player 1 Panel */}
        <View style={ScorePanelStyles.card}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Player 1</Text>
          <TextInput
            style={ScorePanelStyles.playerName}
            placeholder="Player 1 - add name"
            value={player1Name}
            onChangeText={setPlayer1Name}
          />
          <View style={ScorePanelStyles.scoreBox}>
            <Text style={ScorePanelStyles.scoreText}>{score1}</Text>
          </View>
          <View style={ScorePanelStyles.buttonRow}>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints1(10)}>
              <Text style={ScorePanelStyles.buttonText}>+10 Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints1(5)}>
              <Text style={ScorePanelStyles.buttonText}>+5 Points</Text>
            </TouchableOpacity>
          </View>
          <View style={[ScorePanelStyles.buttonRow, { justifyContent: 'center', marginTop: 10 }]}> 
            <TouchableOpacity style={[ScorePanelStyles.button, { backgroundColor: '#f5e9e0', flex: 1, maxWidth: '100%' }]} onPress={undoLast1}>
              <Text style={ScorePanelStyles.buttonText}>Undo</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Player 2 Panel */}
        <View style={ScorePanelStyles.card}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Player 2</Text>
          <TextInput
            style={ScorePanelStyles.playerName}
            placeholder="Player 2 - add name"
            value={player2Name}
            onChangeText={setPlayer2Name}
          />
          <View style={ScorePanelStyles.scoreBox}>
            <Text style={ScorePanelStyles.scoreText}>{score2}</Text>
          </View>
          <View style={ScorePanelStyles.buttonRow}>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints2(10)}>
              <Text style={ScorePanelStyles.buttonText}>+10 Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints2(5)}>
              <Text style={ScorePanelStyles.buttonText}>+5 Points</Text>
            </TouchableOpacity>
          </View>
          <View style={[ScorePanelStyles.buttonRow, { justifyContent: 'center', marginTop: 10 }]}> 
            <TouchableOpacity style={[ScorePanelStyles.button, { backgroundColor: '#f5e9e0', flex: 1, maxWidth: '100%' }]} onPress={undoLast2}>
              <Text style={ScorePanelStyles.buttonText}>Undo</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Player 3 Panel */}
        <View style={ScorePanelStyles.card}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Player 3</Text>
          <TextInput
            style={ScorePanelStyles.playerName}
            placeholder="Player 3 - add name"
            value={player3Name}
            onChangeText={setPlayer3Name}
          />
          <View style={ScorePanelStyles.scoreBox}>
            <Text style={ScorePanelStyles.scoreText}>{score3}</Text>
          </View>
          <View style={ScorePanelStyles.buttonRow}>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints3(10)}>
              <Text style={ScorePanelStyles.buttonText}>+10 Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ScorePanelStyles.button} onPress={() => addPoints3(5)}>
              <Text style={ScorePanelStyles.buttonText}>+5 Points</Text>
            </TouchableOpacity>
          </View>
          <View style={[ScorePanelStyles.buttonRow, { justifyContent: 'center', marginTop: 10 }]}> 
            <TouchableOpacity style={[ScorePanelStyles.button, { backgroundColor: '#f5e9e0', flex: 1, maxWidth: '100%' }]} onPress={undoLast3}>
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
            // Calculate winner for 3 players
            const scores = [score1, score2, score3];
            const names = [player1Name || 'Player 1', player2Name || 'Player 2', player3Name || 'Player 3'];
            const maxScore = Math.max(...scores);
            const winnerIndex = scores.indexOf(maxScore);
            const winnerName = names[winnerIndex];
            alert(`Winner: ${winnerName} with ${maxScore} points!`);
          }}
        >
          <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>End Match</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
