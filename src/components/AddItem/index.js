import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {styles} from './styles';

export const AddItem = function ({addItem}) {
  const [text, setText] = useState('');

  const onChange = textValue => {
    setText(textValue);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder="Add item..."
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Icon name="plus" size={20} color="green" />
      </TouchableOpacity>
    </View>
  );
};
