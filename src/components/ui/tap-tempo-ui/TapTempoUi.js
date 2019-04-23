import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class TapTempoUi extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Button style={styles.tapButton} onPress={this.props.handleButtonClick} title='Tap' color='green' />
        <Text style={styles.clickedText}>Times clicked {this.props.timesClicked}</Text>
        <Text style={styles.clickedText}>Tempo {this.props.tempo} BPM</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan'
  },

  tapButton: {
    flex: 8
  },

  clickedText: {
    flex: 2
  }
})

export default TapTempoUi
