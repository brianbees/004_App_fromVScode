import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';
import { useDS } from '../design-system/DesignSystemProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';

export default function PastScoresScreen() {
  const exportHistory = async () => {
    try {
      const data = await AsyncStorage.getItem('gameHistory');
      if (!data) {
        alert('No history to export.');
        return;
      }
      const history = JSON.parse(data);
      // Build CSV header
      let csv = 'Date,Winner(s),Is Tie,Players & Scores,Notes\n';
      for (const entry of history) {
        const date = entry.date;
        const winners = Array.isArray(entry.winner) ? entry.winner.join(' | ') : entry.winner;
        const isTie = entry.isTie ? 'Yes' : 'No';
        const players = entry.players ? entry.players.map(p => `${p.name}: ${p.score}`).join(' | ') : '';
        const notes = entry.notes ? entry.notes.replace(/\n/g, ' ') : '';
        csv += `"${date}","${winners}","${isTie}","${players}","${notes}"\n`;
      }
      const fileUri = FileSystem.cacheDirectory + 'gameHistory.csv';
      await FileSystem.writeAsStringAsync(fileUri, csv, { encoding: 'utf8' });
      await Sharing.shareAsync(fileUri, {
        mimeType: 'text/csv',
        dialogTitle: 'Share your game history (CSV)',
      });
    } catch (err) {
  alert('Export failed: ' + String(err));
    }
  };
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
      <Text style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Export:</Text> 
        <Text> You can export your game history to a file and share it to cloud storage, email, or other apps.</Text>
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: theme.colors.primary, padding: 12, borderRadius: 8, marginBottom: 16, alignSelf: 'center' }}
        onPress={exportHistory}
      >
        <Text style={{ color: theme.colors.background, fontWeight: 'bold' }}>Export History</Text>
      </TouchableOpacity>
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