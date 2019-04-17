import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Vibration } from 'react-native'

import BluetoothSenderUi from '../../ui/bluetooth-sender-ui/BluetoothSenderUi'
import BluetoothReceiverUi from '../../ui/bluetooth-receiver-ui/BluetoothReceiverUi'
import TapTempoUi from '../../ui/tap-tempo-ui/TapTempoUi'

class BluetoothTestApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      textReceived: '',
      textToSend: '',
      textSent: false,
      timesClicked: 0
    }

    this.handleChangeTextToSend = this.handleChangeTextToSend.bind(this)
    this.handleClickTapButton = this.handleClickTapButton.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
  }

  handleChangeTextToSend (text) {
    this.setState({ textToSend: text })
  }

  handleClickTapButton () {
    this.setState(previousState => ({ timesClicked: previousState.timesClicked + 1 }))
  }

  handleSendText (text) {
    this.setState({ textSent: true })
    this.setState({ textToSend: '' })

    Vibration.vibrate(1000)

    setTimeout(() => { this.setState({ textSent: false }) }, 3000)
  }

  render () {
    return (
      <View style={styles.text}>
        <BluetoothSenderUi
          textToSend={this.state.textToSend}
          textSent={this.state.textSent}
          handleTextChange={this.handleChangeTextToSend}
          handleSendText={this.handleSendText}
        />
        <BluetoothReceiverUi r
          eceivedText={this.state.textReceived}
        />
        <TapTempoUi
          timesClicked={this.state.timesClicked}
          handleButtonClick={this.handleClickTapButton}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#333',
    height: '90%'
  },

  container: {
    backgroundColor: 'dodgerblue'
  }
})

export default BluetoothTestApp
