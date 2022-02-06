import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {AddItem} from './src/components/AddItem';

import {Header} from './src/components/Header';
import {ListItem} from './src/components/ListItem';

const App = function () {
  const titleName = 'Shopping List';

  const [items, setItems] = useState([]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter a item');
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title={titleName} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        style={styles.container}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
