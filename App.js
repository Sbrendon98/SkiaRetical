import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import  BettingDial from './components/BettingDial'
import { styles } from './components/Styles'
import Example from './SkiaTest';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Dildo 
      </Text>
     {/* <Example /> */}
     <BettingDial />
    </View>
  );
}
