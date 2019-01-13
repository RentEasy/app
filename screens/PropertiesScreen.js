import React from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Text,
  Content
} from 'native-base';
import i18n from '../i18n';
import {connect} from 'react-redux';
import {propertiesFetch} from "../actions/PropertiesActions";
import {Property} from "../components/properties/Property";


class PropertiesScreen extends React.Component {
  static navigationOptions = {
    title: i18n.t('general.rentalProperties'),
  };

  componentWillMount() {
    this.props.propertiesFetch();
  }

  componentWillUnmount() {
    this.props.unsubscribe();
  }

  renderLoading() {
    return (
      <View>
        <Text>Loading.</Text>
      </View>
    )
  }

  renderNoContent() {
    return (
      <View>
        <Text>No properties found.</Text>
      </View>
    )
  }

  renderCards() {
    let properties = [];

    this.props.properties.forEach(property => {
      properties.push(
        <TouchableOpacity key={property.id} onPress={() =>
          this.props.navigation.push('Property', {
            property: property
          })
        }>
          <Card>
            <CardItem cardBody>
              <Image
                style={{width: null, flex: 1, height: 200}}
                source={property.image}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>{property.address}</Text>
                <Text note>$1345.56</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )
    });

    return (
      <Content>
        {properties}
      </Content>
    )
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }

    if (this.props.properties.length === 0) {
      return this.renderNoContent();
    }

    return this.renderCards();
  }
}

const mapStateToProps = state => {
  const {loading, properties, unsubscribe} = state.properties;
  return {loading, properties, unsubscribe};
};

export default connect(mapStateToProps, {
  propertiesFetch
})(PropertiesScreen);
