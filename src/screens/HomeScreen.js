import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styles from '../styles/style';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.Center}>
        <Text>
          <Icon name="search" size={50} color="#0cc" />
        </Text>
        <Text style={[styles.Text, local.txt1]}> textInComponent </Text>
      </View>
    );
  }
}

const local = StyleSheet.create({
  txt1: {
    color: 'blue',
  },
});
