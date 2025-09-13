import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#0f1e36',
  },
  button: {
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
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
  infoBox: {
    width: '80%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 20,
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
});

export default GlobalStyles;
