import React from 'react'
import { View, Text, Button } from 'react-native'

class MyModalApp extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  }

  render () {
    return (
      <View>
        <Text>Modal App</Text>

        <Button
          title="Go to Bluetooth App"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Settings App"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    )
  }
}

export default MyModalApp
