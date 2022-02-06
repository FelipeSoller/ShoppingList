import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const Header = function ({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
