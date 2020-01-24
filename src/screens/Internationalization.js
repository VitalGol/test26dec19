import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import I18n from 'react-native-i18n';

export default function Internationalization() {
  return (
    <View>
      <Text>'Welcome to React'</Text>
      <Text>{I18n.t('greeting')}</Text>
      <Text>{I18n.t('goodbye')}</Text>
    </View>
  );
}

I18n.fallbacks = true;
I18n.translations = {
  en: {
    greeting: 'Hello',
    goodbye: 'Bye',
  },
  fr: {
    greeting: 'Bonjour',
    goodbye: 'Au Revoir',
  },
  es: {
    greeting: 'Hola',
    goodbye: 'Adios',
  },
};
