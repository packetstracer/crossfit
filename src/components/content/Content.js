import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Content extends React.Component {
  render () {
    return (
      <View style={styles.text}>
        <Text>Test Component Working -> {this.props.message}</Text>
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
  }
});

export default Content;
