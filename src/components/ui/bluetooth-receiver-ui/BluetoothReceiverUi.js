import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class BluetoothReceiverUi extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.textReceived ? this.props.textReceived : 'Waiting for message...'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
})

export default BluetoothReceiverUi
