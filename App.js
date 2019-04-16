import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './src/components/template/header/Header'
import Footer from './src/components/template/footer/Footer'

import BluetoothTestApp from './src/components/apps/bluetooth-test-app/BluetoothTestApp'

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <BluetoothTestApp />
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
