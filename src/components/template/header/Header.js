import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      logged: true
    }
  }

  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Header {this.state.logged ? '(logged)' : 'Log In'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    top: 0,
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Header;
