import React from 'react';
import { Content, Form, Label, Input, Item, Card, CardItem, Text, Body, Picker, Icon , ListItem, CheckBox} from 'native-base';
import { StyleSheet } from 'react-native';
import i18n from "../../../i18n";
import {Grid, Col, Row} from 'react-native-easy-grid';

export default class AddressScreen extends React.Component {
  static navigationOptions = {
    title: i18n.t('landlord.createProperty'),
  };

  constructor(props) {
    super(props);

    this.state = {
      address: undefined,
      propertyType: undefined,
      allowedAmenities: {
        'pool': 'Pool',
        'heatedDriveway': 'Heated Driveway'
      }
    };
  }

  changePropertyType(value) {
    this.setState({
      propertyType: value
    });
  }

  renderAmenitiy(key, value) {
    console.log(key, value);
    return (
      <Row key={key}>
          <Col><CheckBox checked={false} /></Col>
          <Col><Text>{value}</Text></Col>
      </Row>
    );
    // return <ListItem>
    //   <CheckBox checked={false} />
    //   <Body>
    //     <Text>{value}</Text>
    //   </Body>
    // </ListItem>;
  }

  render() {
    return (
      <Content padder>

        <Form>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Property Address</Label>
                  <Input />
                </Item>
              </Body>
            </CardItem>
          </Card>


          <Card>
            <CardItem header>
              <Text>Property Details</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Item picker stackedLabel>
                  <Label>Property Type</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Select One"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.propertyType}
                    onValueChange={this.changePropertyType.bind(this)}
                  >
                    <Picker.Item label="Apartment" value="apartment" />
                    <Picker.Item label="House" value="house" />
                    <Picker.Item label="Townhouse" value="townhouse" />
                    <Picker.Item label="Unit" value="unit" />
                  </Picker>
                </Item>

                <Item floatingLabel>
                  <Label>Bedrooms</Label>
                  <Input />
                </Item>

                <Item floatingLabel>
                  <Label>Bathrooms</Label>
                  <Input />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Form>
      </Content>
    );
  }
}
