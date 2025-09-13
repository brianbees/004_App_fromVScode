  // Example navigation to Home tab
  // navigation.getParent()?.navigate('MainTabs', { screen: 'Home' });
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';
import { useDS } from '../design-system/DesignSystemProvider';

const mockPastScores = [
  { id: '1', date: '2025-09-01', winner: 'Brian', score: 12 },
  { id: '2', date: '2025-09-08', winner: 'Jane', score: 15 },
];

export default function PastScoresScreen() {
  const { theme } = useDS();
  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background, padding: 16 }]}> 
      <Text style={[GlobalStyles.title, { color: theme.colors.text }]}>Past Scores</Text>
      <FlatList
        data={mockPastScores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: theme.colors.surface }}>
            <Text style={{ color: theme.colors.text }}>{item.date}: {item.winner} ({item.score})</Text>
          </View>
        )}
      />
      <Text style={{ marginTop: 24, fontSize: 16, color: theme.colors.text }}>
        View previous scores and winners here. More history features coming soon!
      </Text>
    </View>
  );
}


