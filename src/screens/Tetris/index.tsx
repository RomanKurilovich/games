import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tetris = () => (
  <View style={styles.container}>
    <Text>Tetris</Text>
  </View>
);

export default Tetris;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
