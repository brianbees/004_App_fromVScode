import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';
import { useDS } from '../design-system/DesignSystemProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PastScoresScreen() {
  const { theme } = useDS();
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // debugRaw state removed

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const fetchHistory = async () => {
        setLoading(true);
        try {
          const data = await AsyncStorage.getItem('gameHistory');
          if (data && isActive) {
            setHistory(JSON.parse(data).reverse()); // newest first
          } else if (isActive) {
            setHistory([]);
          }
        } catch (err) {
          if (isActive) setHistory([]);
        } finally {
          if (isActive) setLoading(false);
        }
      };
      fetchHistory();
      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background, padding: 16 }]}>
      <Text style={[GlobalStyles.title, { color: theme.colors.text }]}>Past Scores</Text>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <FlatList
          data={history}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={{ color: theme.colors.text, marginTop: 24 }}>No games played yet.</Text>}
          renderItem={({ item }) => (
            <View style={{ padding: 12, borderBottomWidth: 1, borderBottomColor: theme.colors.surface }}>
              <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                Date: {new Date(item.date).toLocaleString()}
              </Text>
              <Text style={{ color: theme.colors.text }}>
                Winner{item.isTie ? 's' : ''}: {item.winner.join(', ')}
              </Text>
              <Text style={{ color: theme.colors.text }}>Players & Scores:</Text>
              {item.players && item.players.map((p: any, idx: number) => (
                <Text key={idx} style={{ color: theme.colors.text, marginLeft: 12 }}>
                  {p.name}: {p.score}
                </Text>
              ))}
              {item.notes ? (
                <Text style={{ color: theme.colors.text, fontStyle: 'italic', marginTop: 4 }}>
                  Notes: {item.notes}
                </Text>
              ) : null}
            </View>
          )}
        />
      )}
      <Text style={{ marginTop: 24, fontSize: 16, color: theme.colors.text }}>
        View previous scores and winners here. More history features coming soon!
      </Text>
  {/* Debug panel removed as requested */}
    </View>
  );
}