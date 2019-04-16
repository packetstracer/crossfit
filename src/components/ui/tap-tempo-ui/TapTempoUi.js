import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

class TapTempoUi extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this.props.handleButtonClick} title="Tap" color="green"/>
        <Text>Times clicked {this.props.timesClicked}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
  },
});

export default TapTempoUi;
