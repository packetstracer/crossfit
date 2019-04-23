import React from 'react'
import { StyleSheet, View, Button, Vibration } from 'react-native'

import BluetoothSenderUi from '../../ui/bluetooth-sender-ui/BluetoothSenderUi'
import BluetoothReceiverUi from '../../ui/bluetooth-receiver-ui/BluetoothReceiverUi'
import TapTempoUi from '../../ui/tap-tempo-ui/TapTempoUi'

const SECONDS_PER_MINUTE = 60
const MILLISECONDS_PER_SECOND = 1000
const RESET_COUNTER_TIME_IN_MS = 2000

const VIBRATE_TIME_IN_MS = 1000

const RESET_SEND_TEXT_COUNTER_TIME_IN_MS = 3000

class BluetoothTestApp extends React.Component {
  static navigationOptions = {
    title: 'Bluetooth Test'
  }

  constructor (props) {
    super(props)

    this.state = {
      textReceived: '',
      textToSend: '',
      textSent: false,

      timesClicked: 0,
      firstTimeClicked: 0,
      lastTimeClicked: 0,
      tempo: 0
    }

    this.handleChangeTextToSend = this.handleChangeTextToSend.bind(this)
    this.handleClickTapButton = this.handleClickTapButton.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
  }

  handleReceivedText (text) {
    // @TODO: invoke this function inside bluetooth message handler
    this.setState({ textReceived: text })
    Vibration.vibrate(VIBRATE_TIME_IN_MS)
  }

  handleChangeTextToSend (text) {
    this.setState({ textToSend: text })
  }

  handleClickTapButton () {
    const now = Date.now()

    if (this.hasToResetCounter(now)) {
      this.resetCounter(now)
      Vibration.vibrate(VIBRATE_TIME_IN_MS)
    }
    else {
      this.updateCounter(now)
    }
  }

  hasToResetCounter (now) {
    return (now - this.state.lastTimeClicked) > RESET_COUNTER_TIME_IN_MS
  }

  resetCounter (now) {
    this.setState({ tempo: 0 })
    this.setState({ timesClicked: 0 })
    this.setState({ firstTimeClicked: now })
    this.setState({ lastTimeClicked: now })
  }

  updateCounter (now) {
    this.setState({ lastTimeClicked: now })
    this.setState(state => ({ timesClicked: state.timesClicked + 1 }))
    this.setState(state => ({
      tempo: this.calculateTempo(state.firstTimeClicked, state.lastTimeClicked, state.timesClicked)
    }))
  }

  calculateTempo (startTime, endTime, beats) {
    const elapsedMinutes = (endTime - startTime) / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE)

    return Math.round(beats / elapsedMinutes)
  }

  handleSendText (text) {
    this.setState({ textSent: true })
    this.setState({ textToSend: '' })

    Vibration.vibrate(VIBRATE_TIME_IN_MS)

    setTimeout(() => { this.setState({ textSent: false }) }, RESET_SEND_TEXT_COUNTER_TIME_IN_MS)
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
        <BluetoothReceiverUi
          receivedText={this.state.textReceived}
        />
        <TapTempoUi
          timesClicked={this.state.timesClicked}
          handleButtonClick={this.handleClickTapButton}
          tempo={this.state.tempo}
        />

        <Button
          title='Go to Settings'
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title='Go to My Modal'
          onPress={() => this.props.navigation.navigate('Modal')}
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
  }
})

export default BluetoothTestApp
