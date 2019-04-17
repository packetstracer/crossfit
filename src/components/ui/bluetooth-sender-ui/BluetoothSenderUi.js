import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

class BluetoothSenderUi extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder='Type the text to send!'
          value={this.props.textToSend}
          onChangeText={this.props.handleTextChange}
          onSubmitEditing={(text) => this.props.handleSendText(text)}
        />
        <Text>{this.props.textSent ? 'Text has been sent' : null}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  }
})

export default BluetoothSenderUi
