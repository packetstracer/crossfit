import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

class Content extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      textReceived: '',
      textToSend: '',
      textSent: false,
      timesClicked: 0,
    };

    this.handleChangeTextToSend = this.handleChangeTextToSend.bind(this);
    this.handleClickTapButton = this.handleClickTapButton.bind(this);
  }

  handleChangeTextToSend (text) {
    this.setState({ textToSend: text });
  }

  handleClickTapButton () {
    this.setState(previousState => ({ timesClicked: previousState.timesClicked + 1 }));
  }

  sendText (text) {
    this.setState({ textSent: true });
    this.setState({ textToSend: '' });

    setTimeout(() => {
      console.log('Changing state...');
      this.setState({ textSent: false });
    }, 3000);
  }

  render () {
    return (
      <View style={styles.text}>
        <Text style={styles.receivedText}>
          { this.state.textReceived ? this.state.textReceived : 'Waiting for message...' }
        </Text>

        <TextInput
          style={{height: 40}}
          placeholder="Type the text to send!"
          value={this.state.textToSend}
          onChangeText={this.handleChangeTextToSend}
          onSubmitEditing={(text) => this.sendText(text)}
        />
        <Text>{ this.state.textSent ? 'Text has been sent' : null }</Text>

        <Button onPress={this.handleClickTapButton} title="Tap" />
        <Text>Times clicked {this.state.timesClicked}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#333',
    height: '90%',
  },

  receivedText: {
    backgroundColor: 'dodgerblue',
  },
});

export default Content;
