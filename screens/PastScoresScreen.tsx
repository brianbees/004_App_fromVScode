import React from 'react';
import { View, Text, FlatList } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';

const mockPastScores = [
  { id: '1', date: '2025-09-01', winner: 'Brian', score: 12 },
  { id: '2', date: '2025-09-08', winner: 'Jane', score: 15 },
];

export default function PastScoresScreen() {
  return (
    <View style={{ ...GlobalStyles.container, padding: 16 }}>
      <Text style={GlobalStyles.title}>Past Scores</Text>
      <FlatList
        data={mockPastScores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            <Text>{item.date}: {item.winner} ({item.score})</Text>
          </View>
        )}
      />
      <Text style={{ marginTop: 24, fontSize: 16, color: '#555' }}>
        View previous scores and winners here. More history features coming soon!
      </Text>
    </View>
  );
}


