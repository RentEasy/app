import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Property extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 200, left: 0, right: 0 }}
          resizeMode="contain"
          source={{uri: 'https://loremflickr.com/g/800/450/house'}}
        />
        <Text>Your Beautiful Home</Text>
        <Text>1234 Fake Dr. Garland, Tx 75043</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1
  },
});
