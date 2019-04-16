import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Footer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      logged: true
    }
  }

  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Fatty Cuts 2019</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#800',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
  }
});

export default Footer;
