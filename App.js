import React from 'react';
import { StyleSheet, View } from 'react-native';

import Content from './src/components/content/Content'
import Header from './src/components/header/Header'
import Footer from './src/components/footer/Footer'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Content/>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
