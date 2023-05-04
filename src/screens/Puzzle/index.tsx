import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Puzzle = () => (
  <View style={styles.container}>
    <Text>Puzzle</Text>
  </View>
);

export default Puzzle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
