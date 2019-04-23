import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class SettingsIconUi extends React.Component {
  toggleDrawer () {
    console.log(this.props.navigationProps)
    this.props.navigationProps.toggleDrawer()
  }

  render () {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Text>AAA</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SettingsIconUi
