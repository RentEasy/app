import React from 'react';
import {
  Image
} from 'react-native';
import { Content, Text, Icon, Thumbnail, Body, Right, Card, CardItem, Grid, Col } from 'native-base';
import ProfitChart from "../../components/properties/ProfitChart";

export default class PropertyScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const property = navigation.getParam('property');

    return (
      <Content padder>
        <Card>
          <CardItem header>
            <Body> 
              <Text>{property.address}</Text> 
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{ width: null, flex: 1, height: 200 }}
              source={property.image}
            />
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Current Tenants</Text>
          </CardItem>
          <CardItem>
            <Grid>
              <Col size={9}>
              <Text numberOfLines={1}>{property.tenant.name}</Text>
                <Text note numberOfLines={1}>Started: September 2013</Text>
                <Text note numberOfLines={1}>Ends: September 2014</Text>
              </Col>
              <Col size={2}>
                <Thumbnail circular source={{ uri: "http://placekitten.com/200/200" }} /> 
              </Col>
            </Grid> 
          </CardItem>
        </Card>
        <Card>
          <CardItem> 
            <Grid>
              <Col size={1}>
              <Icon active name="md-star" />
              </Col>
              <Col size={9}>
                <Text note numberOfLines={2}>You could increase profit 32% by using RentEasy's Contractor Services.</Text>
              </Col>
            </Grid> 
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Profit &amp; Loss</Text>
          </CardItem>
          <CardItem>
            <Body>
              <ProfitChart />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

