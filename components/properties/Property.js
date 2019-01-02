import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Property = ({property, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: 200 }}
          resizeMode="contain"
          source={property.image}
        />
        <Text>{property.address}</Text>
        <Text>1234 Fake</Text>
      </View>
    </TouchableOpacity>
  );
};

export {Property};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
});
