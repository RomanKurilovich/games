import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Snake = () => (
  <View style={styles.container}>
    <Text>Snake</Text>
  </View>
);

export default Snake;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
