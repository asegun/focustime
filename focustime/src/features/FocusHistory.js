import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/Sizes';


export const FocusHistory = ({ history}) => {
  if(!history || !history.length) return <Text style={styles.item}>You have not focused on anything yet!</Text>;  

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
 return(
   <View>
   <Text style={styles.title}> Previous focused </Text>
   <FlatList
       data={history}
       renderItem={renderItem}
      />
   </View>
 )
}
const styles = StyleSheet.create({
item: { 
color: colors.white,
fontSize: fontSizes.md,
},

title: {
color: colors.white,
fontSize: fontSizes.md,
padding: spacing.md,
  }
})