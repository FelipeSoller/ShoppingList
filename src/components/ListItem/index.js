import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {styles} from './styles';

export const ListItem = function ({item, deleteItem}) {
  return (
    <TouchableOpacity>
      <View style={styles.listView}>
        <Text style={styles.text}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
