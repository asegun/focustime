import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/Sizes';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
      focusSubject ={currentSubject}
      onTimerEnd={(subject) => {setHistory([...history, subject])}}
      clearSubject={()=>{setCurrentSubject(null)}}

       />
      ) : (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      )}
     
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS ==='andriod' ? StatusBar.currentHeight : 0,
  },
  
});
