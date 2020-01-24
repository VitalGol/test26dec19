import React from 'react';
import {View, StyleSheet} from 'react-native';

// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js';
import Header from '../components/Header';

export default class ScreenOne extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <View>
        <Header />
        <View style={styles.container}>
          <ScreenName
            name={'Screen One' /*pass the name prop to ScreenName*/}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
