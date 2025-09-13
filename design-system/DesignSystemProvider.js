import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from './theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DesignSystemContext = createContext({
  theme: lightTheme,
  setTheme: (type) => {},
});

export function DesignSystemProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    AsyncStorage.getItem('userTheme').then((stored) => {
      if (stored === 'dark') setTheme(darkTheme);
      if (stored === 'light') setTheme(lightTheme);
    });
  }, []);

  const updateTheme = (type) => {
    setTheme(type === 'dark' ? darkTheme : lightTheme);
    AsyncStorage.setItem('userTheme', type);
  };

  return (
    <DesignSystemContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </DesignSystemContext.Provider>
  );
}

export function useDS() {
  return useContext(DesignSystemContext);
}
