import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
  <View style={styles.body}>
    <Text style={styles.text}>Step One</Text>
    <Text style={styles.firstText}>
      Социальная сеть для людей
    </Text>
    <Text style={styles.threeText}>Almost before we knew</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#345554',
    fontSize: 25,
    fontFamily: 'Rubik-Medium',
  },
  firstText: {
    color: 'red',
    fontSize: 25,
    fontFamily: 'Rubik-Bold',
  },
  threeText: {
    color: '#000',
    fontSize: 25,
    fontFamily: 'Rubik-LightItalic',
  },
});

export default App;
