import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockPastScores = [
  { id: '1', date: '2025-09-01', winner: 'Brian', score: 12 },
  { id: '2', date: '2025-09-08', winner: 'Jane', score: 15 },
];

export default function PastScoresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Scores</Text>
      <FlatList
        data={mockPastScores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
