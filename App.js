import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

// import Header from './src/components/template/header/Header'
// import Footer from './src/components/template/footer/Footer'

import BluetoothTestApp from './src/components/apps/bluetooth-test-app/BluetoothTestApp'
import SettingsApp from './src/components/apps/settings-app/SettingsApp'
import MyModalApp from './src/components/apps/my-modal-app/MyModalApp'

const MainStack = createStackNavigator(
  {
    Home: BluetoothTestApp,
    Settings: SettingsApp
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    }
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
    // return (
    //   <View style={styles.container}>
    //     <Header />
    //     <BluetoothTestApp />
    //     <Footer />
    //   </View>
    // )
    return <AppContainer />
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

export default App
