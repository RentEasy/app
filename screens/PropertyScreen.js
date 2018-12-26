import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

export default class PropertyScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const property = navigation.getParam('property');

    return (
      <View>
        <Image
          style={{ width: '100%', height: 200 }}
          resizeMode="contain"
          source={property.image}
        />
        <Text>{property.address}</Text>
        <Text>1234 Fake</Text>
      </View>
    );
  }
}

