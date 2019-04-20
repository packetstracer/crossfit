import React from 'react'
import { View, Text, Button } from 'react-native'

class SettingsApp extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  }

  render () {
    return (
      <View>
        <Text>Settings App</Text>

        <Button
          title="Go to Bluetooth App"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default SettingsApp
