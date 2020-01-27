import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styles from '../styles/style';

export default class Page1 extends Component {
  render() {
    return (
      <View style={styles.Center}>
        <Text style={styles.Text}> Page 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
