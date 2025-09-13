
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ScorePanelStyles from '../src/components/ScorePanelStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const trophyImage = require('../assets/trophy.png');

type WinnersParams = {
  playerName?: string;
  playerName2?: string;
  playerName3?: string;
  playerName4?: string;
  score?: number | string;
  score2?: number | string;
  score3?: number | string;
  score4?: number | string;
};

export default function WinnersScreen() {
  const [debugGame, setDebugGame] = useState<any>(null);
  const route = useRoute();
  // Collect all player names and scores from params
  const params = route.params as Record<string, any>;
  const names: string[] = [];
  const scores: number[] = [];
  for (let i = 1; i <= 4; i++) {
    const name = params[`playerName${i === 1 ? '' : i}`];
    const score = params[`score${i === 1 ? '' : i}`];
    if (name !== undefined && score !== undefined) {
      names.push((typeof name === 'string' && name.trim()) ? name.trim() : `Player ${i}`);
      scores.push(Number(score));
    }
  }
  // Only show as many players as were passed
  // Sort scores and names in descending order
  const scoreNamePairs = names.map((name, idx) => ({ name, score: scores[idx] }));
  scoreNamePairs.sort((a, b) => b.score - a.score);
  const maxScore = scoreNamePairs.length ? scoreNamePairs[0].score : 0;
  const winnerIndices = scoreNamePairs
    .map((pair, idx) => (pair.score === maxScore ? idx : -1))
    .filter(idx => idx !== -1);
  const winnerNames = winnerIndices.map(idx => scoreNamePairs[idx].name);
  const isTie = winnerNames.length > 1 && maxScore > 0;
  const noWinner = maxScore === 0;

  // Save game history to AsyncStorage when screen mounts
  useEffect(() => {
    const saveHistory = async () => {
      try {
        let generatedId = '';
        try {
          generatedId = uuid.v4();
        } catch (uuidError) {
          setDebugGame({
            error: 'UUID generation failed',
            details: {
              message: 'UUID generation failed',
              stack: uuidError?.stack || '',
            },
          });
          console.error('UUID generation failed:', uuidError);
          return;
        }
        const newGame = {
          id: generatedId,
          date: new Date().toISOString(),
          players: scoreNamePairs,
          winner: winnerNames,
          isTie,
          notes: '', // Add notes if needed
        };
        setDebugGame(newGame);
        const existing = await AsyncStorage.getItem('gameHistory');
        let history = [];
        if (existing) {
          history = JSON.parse(existing);
        }
        // Always save a new entry, regardless of ID
        history.push(newGame);
        await AsyncStorage.setItem('gameHistory', JSON.stringify(history));
      } catch (err) {
        let errorDetails = {};
        if (err instanceof Error) {
          errorDetails = { message: err.message, stack: err.stack };
        } else {
          errorDetails = { value: err };
        }
        setDebugGame({ error: 'Failed to save game history', details: errorDetails });
        console.error('AsyncStorage save error:', errorDetails);
      }
    };
    saveHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={trophyImage}
        style={styles.trophy}
        resizeMode="contain"
      />
      {(noWinner || isTie) ? (
        <>
          <Text style={styles.winnerText}>It's a tie between players:</Text>
          <Text style={styles.winnerName}>{winnerNames.join(', ')}</Text>
          <Text style={styles.winnerText}>each with a score of {maxScore}</Text>
        </>
      ) : (
        <>
          <Text style={styles.winnerText}>the winner is</Text>
          <Text style={styles.winnerName}>{winnerNames[0]}</Text>
        </>
      )}
      <View style={{ marginBottom: 24 }}>
        {scoreNamePairs.map((pair, idx) => (
          <View key={idx} style={ScorePanelStyles.card}>
            <Text style={ScorePanelStyles.scoreText}>{pair.name}: {pair.score}</Text>
          </View>
        ))}
      </View>
      {/* Debug panel removed as requested */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 24,
  },
  trophy: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4dd0e1',
    marginBottom: 8,
    textAlign: 'center',
  },
  winnerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
    textAlign: 'center',
  },
});
