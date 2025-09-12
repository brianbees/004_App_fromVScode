import { StyleSheet } from 'react-native';

const ScorePanelStyles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 180,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#bdbdbd',
    borderWidth: 4,
    borderColor: '#007AFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  playerName: {
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#e0dede',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  scoreBox: {
    width: '90%',
    backgroundColor: '#4dd0e1',
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#f5e9e0',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ScorePanelStyles;
