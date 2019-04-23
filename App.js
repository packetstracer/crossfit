import React from 'react'
import { Button } from 'react-native'
import {
  createStackNavigator,
  // createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'

import BluetoothTestApp from './src/components/apps/bluetooth-test-app/BluetoothTestApp'
import SettingsApp from './src/components/apps/settings-app/SettingsApp'
import MyModalApp from './src/components/apps/my-modal-app/MyModalApp'

import SettingsIconUi from './src/components/ui/settings-icon-ui/SettingsIconUi'

const MainStack = createStackNavigator(
  {
    Home: BluetoothTestApp,
    Settings: SettingsApp
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      // headerRight: (
      //   <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),
      headerRight: (
        <SettingsIconUi navigationProps={ navigation } />
      ),
    })
  },
)

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    Modal: MyModalApp
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(RootStack)

class App extends React.Component {
  render () {
    return <AppContainer />
  }
}

export default App
