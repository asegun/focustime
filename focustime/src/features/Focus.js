import React, { useState  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {colors}from '../utils/colors';
import { spacing, fontSizes } from '../utils/Sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> what would you like to focus on? </Text>
        <View style={styles.inputContainer}>
          <TextInput label ="what would you like to focus on" 
          
            onChangeText={setSubject}
          />
          <RoundedButton size= {50} title = "+" onPress={() => addSubject(subject)} />
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
